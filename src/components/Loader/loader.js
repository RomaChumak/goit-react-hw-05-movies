import { FallingLines } from 'react-loader-spinner';
import { LoaderStyled } from './loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <FallingLines
        color="#1e1e1e"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderStyled>
  );
};