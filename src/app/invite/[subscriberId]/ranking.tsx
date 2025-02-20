import Image from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-x-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Raking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-base text-gray-300 leading-none">
            <strong>1°</strong> | Julliane Di Paula
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-base text-gray-300 leading-none">
            <strong>2°</strong> | Rosangela Xavier
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            928
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-base text-gray-300 leading-none">
            <strong>3°</strong> | Isabelle Di Paula
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            875
          </span>

          <Image src={cooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
