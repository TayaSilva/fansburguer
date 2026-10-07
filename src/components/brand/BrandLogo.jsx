export default function BrandLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <img src="/img/ghost-mark.svg" alt="" aria-hidden="true" className="h-10 w-auto" />
      <img
        src="/img/fansburguer-wordmark.svg"
        alt="Fansburguer"
        className="h-8 w-auto transition-opacity duration-[5000ms] ease-linear hover:opacity-0"
      />
    </span>
  )
}
