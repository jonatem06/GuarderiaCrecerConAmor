// src/components/RouteGuards/ProtectedRoute.jsx

const Finanzas = () => {
  return (
    <div className=" size-full flex flex-row bg-slate-50">
      <div className="flex  grow flex-row">
        <div className="flex flex-1 justify-center">
          <div className="flex 
            min-h-[24rem] sm:min-h-[33rem] md:min-h-[33rem] lg:min-h-[33rem] xl:min-h-[33rem] 
            min-w-[24rem] sm:min-w-[33rem] md:min-w-[33rem] lg:min-w-[33rem] xl:min-w-[33rem]
            ">
              <label className="flex flex-row">
                Gasto
                <input type="Number" 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-1 focus:ring-0 border border-[#d0dde7] bg-slate-50 focus:border-[#d0dde7]  placeholder:text-[#4e7997] text-base font-normal leading-normal"
                placeholder="Gasto"/>
              </label><br />
              <label className="flex flex-row">
                Tipo de Gasto
                <input type="Number" 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-1 focus:ring-0 border border-[#d0dde7] bg-slate-50 focus:border-[#d0dde7]  placeholder:text-[#4e7997] text-base font-normal leading-normal"
                placeholder="Tipo de Gasto"/>
              </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finanzas
