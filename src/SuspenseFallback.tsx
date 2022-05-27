import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function SuspenseFallback() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
export default SuspenseFallback;