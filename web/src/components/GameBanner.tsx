interface GammeBannerProps {
  bannerUrl: string
  title: string
  adsCount: number
}

export function GameBanner(proprs: GammeBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={proprs.bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{proprs.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {proprs.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  )
}
