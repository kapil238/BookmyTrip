import AuthTabs from './AuthTabs';
import AuthForm from './AuthForm';
import ImageShowcase from './ImageShowcase';

export default function AuthLayout({ isLogin }: { isLogin: boolean }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?semt=ais_hybrid&w=740')`,
      }}
    >
      <div className="bg-white flex w-full max-w-6xl rounded-[2rem] overflow-hidden shadow-lg">
        <div className="w-full md:w-1/2 p-10">
          <AuthTabs isLogin={isLogin} />
          <AuthForm isLogin={isLogin} />
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <ImageShowcase />
        </div>
      </div>
    </div>
  );
}

