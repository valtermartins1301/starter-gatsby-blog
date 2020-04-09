import { mq, css } from '@creditas/stylitas';

const getDisplay = ({ hiddenIn, visibleIn }) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
  const display = ['inherit', 'inherit', 'inherit', 'inherit', 'inherit'];

  if (hiddenIn) {
    breakpoints.map((b, i) => {
      if (hiddenIn.indexOf(b) > -1) display[i] = 'none';
    });
  } else if (visibleIn) {
    breakpoints.map((b, i) => {
      if (visibleIn.indexOf(b) === -1) display[i] = 'none';
    });
  }

  return display;
};

const hiddenNavbarGroup = ({ hiddenIn, visibleIn }) => css(
  mq({
    display: (hiddenIn || visibleIn) ? getDisplay({ hiddenIn, visibleIn }) : ['inherit', 'inherit', 'inherit', 'inherit', 'inherit'],
  }),
);

export { hiddenNavbarGroup };
