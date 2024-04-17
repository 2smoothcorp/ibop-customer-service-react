# Install dependencies only when needed
FROM node:18-alpine AS deps

##Install tzdata for change timezone
RUN apk --no-cache add tzdata
ENV TZ=Asia/Bangkok

# ##copy timezone to localtime
# RUN cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

# ##set timezone
# RUN echo 'Asia/Bangkok' >  /etc/timezone

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY .npmrc ./
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# RUN mkdir -p ./patches
# COPY patches/react-thailand-address-typeahead+2.0.1.patch ./patches

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY kendo-ui-license.txt ./

RUN npm install --save @progress/kendo-licensing

RUN npx kendo-ui-license activate

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# This will do the trick, use the corresponding env file for each environment.
COPY .env.development .env.production

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN apk update
RUN apk add nano

COPY --from=builder /app/public ./public
# COPY --from=builder /app/.env.production ./

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV TZ="Asia/Bangkok"

CMD ["node", "server.js"]
