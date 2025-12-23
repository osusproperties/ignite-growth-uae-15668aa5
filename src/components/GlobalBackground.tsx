const GlobalBackground = () => {
  return (
    <>
      {/* Circuit board background - Fixed position covering entire viewport */}
      <div 
        className="fixed inset-0 z-[-2] bg-background"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230a0e1a'/%3E%3Cstop offset='100%25' style='stop-color:%23050810'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Circuit pattern overlay */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(79, 195, 247, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(79, 195, 247, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 20% 30%, rgba(79, 195, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(79, 195, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(79, 195, 247, 0.1) 0%, transparent 60%)
          `,
          backgroundSize: '100px 100px, 100px 100px, 100% 100%, 100% 100%, 100% 100%',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0, 0 0',
          backgroundBlendMode: 'screen'
        }}
      />

      {/* Animated circuit nodes */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-20">
        {/* Top left */}
        <div 
          className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '3s', animationDelay: '0s' }} 
        />
        <div 
          className="absolute top-[15%] left-[25%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} 
        />
        
        {/* Top right */}
        <div 
          className="absolute top-[20%] right-[10%] w-2 h-2 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '3.5s', animationDelay: '1s' }} 
        />
        <div 
          className="absolute top-[12%] right-[20%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} 
        />
        
        {/* Middle */}
        <div 
          className="absolute top-[45%] left-[30%] w-2 h-2 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} 
        />
        <div 
          className="absolute top-[50%] right-[35%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '2.7s', animationDelay: '1.2s' }} 
        />
        
        {/* Bottom */}
        <div 
          className="absolute bottom-[15%] left-[20%] w-2 h-2 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '3.3s', animationDelay: '0.6s' }} 
        />
        <div 
          className="absolute bottom-[25%] right-[25%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '2.6s', animationDelay: '1.5s' }} 
        />
        <div 
          className="absolute bottom-[10%] right-[15%] w-2 h-2 rounded-full bg-accent animate-pulse" 
          style={{ animationDuration: '3.1s', animationDelay: '0.2s' }} 
        />
      </div>

      {/* Subtle gradient overlay for better contrast */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 26, 0.4) 100%)'
        }}
      />
    </>
  );
};

export default GlobalBackground;
