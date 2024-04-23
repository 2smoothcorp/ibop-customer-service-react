/**
 *  Component - App Loader
 */

import { Box, CircularProgress } from '@mui/material';

export const AppLoader = ({ asContentLoader, color }: AppLoaderProps) => {
  if(asContentLoader) {
    return (
      <div className={'w-screen p-4 flex items-center justify-center bg-zinc-400/[.06]'}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color={ color || 'primary' } />
        </Box>
      </div>
    );
  }

  return (
    <div className={'w-screen h-screen flex items-center justify-center bg-zinc-400/[.06]'}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color={ color || 'primary' } />
      </Box>
    </div>
  );
}

interface AppLoaderProps {
  asContentLoader?: boolean;

  /** @default 'primary' */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}