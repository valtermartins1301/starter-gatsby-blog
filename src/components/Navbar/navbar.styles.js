import { mq, css } from '@creditas/stylitas';

const base = () => css`
  background-color: #ffffff;
  color: #6699dd;
  border-bottom: 2px solid rgb(238, 238, 238);
  padding: 0;

  ${mq({
    height: [48, 48, 48, 72, 72],
    padding: '0px !important',
  })}
`;

const fixedNavbar = ({ fixed }) => fixed
&& css`
    position: fixed;
    left: auto;
    top: 0px;
    bottom: auto;
    z-index: 1040;
    width: 100%;
`;

const containerMain = css`width: 100%;`;

const divRowMain = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export {
  base,
  fixedNavbar,
  containerMain,
  divRowMain,
};
