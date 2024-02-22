export const fadeIn = (deirection, delay) => {
  return {
    hidden:{
      y: deirection === 'up' ? 40 : deirection === 'down' ? -40 : 0,
      opacity: 0,
      x: deirection === 'left' ? 40 : deirection === 'right' ? -40 : 0
    },
    show:{
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type:"tween",
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  }
}