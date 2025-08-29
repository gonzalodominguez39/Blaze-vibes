import { useForm, type SubmitHandler } from "react-hook-form";
import urlLogin from "../../assets/blaze-portada.jpeg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const Navigate = useNavigate();
  localStorage.setItem("isLogin", "true");
  console.log(errors)
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-0 bg-gradient-to-b from-zinc-900 to-black">
      <div className="flex bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden max-w-sm lg:max-w-4xl w-full backdrop-blur-xl">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${urlLogin})`,
          }}
        ></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-8 lg:w-1/2 space-y-6"
        >
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold text-white">Welcome Blaze !</h3>
            <p className="text-zinc-400">
              Sign in to continue your musical journey
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                className="w-full h-12 bg-zinc-800/50 text-white rounded-xl border border-zinc-700 px-4 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 transition-all duration-200"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-zinc-400 text-sm font-medium">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                className="w-full h-12 bg-zinc-800/50 text-white rounded-xl border border-zinc-700 px-4 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 transition-all duration-200"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                Navigate("/");
              }}
              className="w-full h-12 cursor-pointer bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50"
            >
              Sign In
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-zinc-400 bg-zinc-900/50">
                  Or continue with
                </span>
              </div>
            </div>

            <button className="w-full h-12 cursor-pointer bg-zinc-800/50 hover:bg-zinc-800 text-white font-medium rounded-xl border border-zinc-700 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50 flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>
          </div>

          <p className="text-center text-zinc-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
