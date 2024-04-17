# ASP - Customer Service
- API Domain
  - go to `api-generator/`
    - duplicate `config.template.yml` and change its name to appropriate one.
    - make change of `xxx` and `yyy` in that file
  - go to `package.json`
    - add script `apigen:process:api-[domain name]` and make neccessary changes
    - update script `apigen`
      - append `npm run apigen:process:api-[domain name]` (add `&` if neccessary)
    - update script `apigen:process:correction`
      - add `[domain name]` and the end of script string (using for argv)
