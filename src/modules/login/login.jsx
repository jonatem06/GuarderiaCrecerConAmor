import { Component } from 'react';

class Login extends Component {
    render() {
        return (
          <div className=" size-full flex flex-col bg-slate-50 group/design-root">
          <div className="layout-container flex  grow flex-col">
            <div className="flex flex-1 justify-center">
              <div className="">
                <div className="">
                  <div className="">
                    <div className=" bg-top bg-no-repeat bg-cover flex 
                    min-h-[24rem] sm:min-h-[33rem] md:min-h-[33rem] lg:min-h-[33rem] xl:min-h-[33rem] 
                    min-w-[24rem] sm:min-w-[33rem] md:min-w-[33rem] lg:min-w-[33rem] xl:min-w-[33rem] 
                    bg-[url(../../assets/img/school/crecer_con_amor.jpeg)]">
                    </div>
                  </div>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      type="text"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d0dde7] bg-slate-50 focus:border-[#d0dde7] h-14 placeholder:text-[#4e7997] p-[15px] text-base font-normal leading-normal"
                      placeholder="Usuario"
                    />
                  </label>
                  
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      placeholder="Password"
                      type="password"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d0dde7] bg-slate-50 focus:border-[#d0dde7] h-14 placeholder:text-[#4e7997] p-[15px] text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div className="flex px-4 py-3 ">
                  <button
                    className="h-10 px-4 w-full max-w-[480px]
                      flex items-center justify-center 
                      overflow-hidden rounded-full 
                      bg-black text-slate-50 text-sm font-bold tracking-[0.015em] 
                      cursor-pointer"
                  >
                      <span className='truncate'>Login</span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default Login;