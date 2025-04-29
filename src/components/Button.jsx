

export default function Button({ children, variant = 'primary', fontFamily = 'Montserrat', fontWeight = 'normal', fontSize = 'base' }) {

  const fontClass = fontFamily === 'Montserrat' ? 'font-montserrat' : (fontFamily === 'Poppins' ? 'font-poppins' : 'font-montserrat');
  const weightClasses = {
    thin: 'font-thin',      // 100
    extralight: 'font-extralight', // 200
    light: 'font-light',    // 300
    normal: 'font-normal',  // 400
    medium: 'font-medium',  // 500
    semibold: 'font-semibold', // 600
    bold: 'font-bold',      // 700
    extrabold: 'font-extrabold', // 800
    black: 'font-black' 
  }

  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl : 'text-2xl',
    xxxl: 'text-3xl',
  };

  const sizeClass = sizeClasses[fontSize] || 'text-base'; // Default to base if not found

  const weightClass = weightClasses[fontWeight] || 'font-normal'; // Default to normal if not found
  const buttonClasses = {
    primary: `btn btn-xl ${fontClass} ${weightClass} ${sizeClass} border-1 rounded-full bg-primary text-secondary px-5 transition-colors duration-300 hover:bg-teal-700`,
    primaryBis: `btn btn-sm ${fontClass} ${weightClass} ${sizeClass} border-1 my-5  rounded-full bg-primary text-secondary px-5 transition-colors duration-300 hover:bg-teal-700`,
    secondary: `btn btn-xl ${fontClass} ${weightClass} ${sizeClass} border-1 rounded-full bg-secondary text-primary px-5 transition-colors duration-300 hover:bg-secondary `,
  };

  return (
    <button className={buttonClasses[variant]}>
      {children}
    </button>
  );
}

