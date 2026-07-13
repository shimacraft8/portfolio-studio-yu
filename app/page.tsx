import Image from "next/image";
import {
  site,
  concepts,
  trainer,
  menus,
  campaign,
  priceGroups,
  priceNote,
} from "@/src/data/site";
import { Header } from "@/src/components/Header";
import { MobileCTA } from "@/src/components/MobileCTA";
import { Reveal } from "@/src/components/Reveal";
import { Stats } from "@/src/components/Stats";
import { VoiceCarousel } from "@/src/components/VoiceCarousel";
import { Faq } from "@/src/components/Faq";

/** セクション見出し（背景に大きなゴーストEN文字） */
function SectionHead({
  en,
  title,
  center = false,
  dark = false,
}: {
  en: string;
  title: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`relative ${center ? "text-center" : ""}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-7 select-none whitespace-nowrap font-display text-[clamp(3.2rem,9vw,6.5rem)] font-extrabold leading-none sm:-top-10 ${
          dark ? "text-white/[0.05]" : "text-text/[0.04]"
        } ${center ? "left-1/2 -translate-x-1/2" : "left-0"}`}
      >
        {en}
      </span>
      <span
        className={`section-eyebrow relative font-display text-xs font-semibold uppercase ${
          dark ? "text-white/45" : "text-text/45"
        }`}
      >
        {en}
      </span>
      <h2
        className={`fluid-h2 relative mt-3 font-extrabold ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

/** チェックアイコン */
function Check() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-accent">
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" aria-hidden>
        <path
          d="M20 6L9 17l-5-5"
          stroke="#fff"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* ============ HERO ============ */}
        <section
          id="hero"
          className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
        >
          <Image
            src="/images/gym-interior.jpg"
            alt={`${site.fullName} のトレーニング空間`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-bg" />

          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center text-white">
            <Reveal>
              <Image
                src="/images/logo-white.png"
                alt={site.fullName}
                width={230}
                height={168}
                priority
                className="mx-auto h-auto w-40 drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)] sm:w-52"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="fluid-hero mt-8 font-extrabold tracking-tight">
                鍛える、整える、
                <br className="sm:hidden" />
                続けられる。
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                {site.area}の完全マンツーマン・パーソナルジム。
                <br className="hidden sm:block" />
                あなただけの空間で、一生使える体づくりを。
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <span className="mt-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-xs font-bold tracking-wide backdrop-blur-sm">
                入会金 {campaign.before} → {campaign.after} キャンペーン中
              </span>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-bold text-text shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  体験・ご予約はこちら
                </a>
                <a
                  href="#concept"
                  className="w-full rounded-full border border-white/50 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  {site.name} について
                </a>
              </div>
            </Reveal>
          </div>

          {/* スクロールインジケータ */}
          <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-10">
            <span className="font-display text-[10px] tracking-[0.35em] text-white/50">
              SCROLL
            </span>
            <span className="h-10 w-px animate-pulse bg-white/40" />
          </div>
        </section>

        {/* ============ CONCEPT ============ */}
        <section id="concept" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <Reveal>
            <SectionHead en="CONCEPT" title="「続けられる」を、設計する。" />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text/70 sm:text-base">
              ただ追い込むだけでは続きません。{site.name}
              は、姿勢や動きの質から整え、生活に馴染む強度であなたの変化を伴走します。
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {concepts.map((c, i) => (
              <Reveal key={c.no} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="font-display text-4xl font-extrabold text-text/10 transition-colors duration-300 group-hover:text-text/25">
                    {c.no}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text/70">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ STATS（黒帯バンド） ============ */}
        <section className="bg-accent py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5">
            <Reveal>
              <Stats />
            </Reveal>
          </div>
        </section>

        {/* ============ TRAINER ============ */}
        <section id="trainer" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-12">
            <Reveal>
              <div className="relative mx-auto mb-10 w-full max-w-sm sm:mb-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_32px_64px_-32px_rgba(0,0,0,0.4)]">
                  <Image
                    src={trainer.image}
                    alt={trainer.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-3 aspect-square w-32 overflow-hidden rounded-2xl border-4 border-bg shadow-xl sm:-right-8 sm:w-40">
                  <Image
                    src={trainer.imageSub}
                    alt={trainer.imageSubAlt}
                    fill
                    sizes="160px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHead en="TRAINER" title={trainer.name} />
              <p className="mt-1 font-display text-sm tracking-widest text-text/50">
                {trainer.nameEn}
              </p>
              <p className="mt-3 text-sm font-bold">{trainer.role}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trainer.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-text/20 bg-card px-3 py-1.5 text-xs text-text/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4 border-l-2 border-accent/80 pl-5">
                {trainer.message.map((m, i) => (
                  <p key={i} className="text-sm leading-relaxed text-text/75">
                    {m}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ MENU ============ */}
        <section
          id="menu"
          className="border-y border-line bg-card2/50 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionHead en="MENU" title="対応メニュー" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {menus.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="group flex h-full gap-5 rounded-2xl border border-line bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]">
                    <span className="font-display text-2xl font-extrabold text-text/15 transition-colors group-hover:text-text/35">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text/70">
                        {m.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRICE ============ */}
        <section id="price" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <Reveal>
            <SectionHead en="PRICE" title="料金プラン" />
          </Reveal>

          {/* キャンペーン: 入会金0円＋体験 */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
                <div className="bg-accent py-3 text-center font-display text-sm font-bold tracking-[0.2em] text-white">
                  {campaign.item}
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-6 py-9 text-center">
                  <p className="text-sm text-text/45 line-through">
                    {campaign.before}
                  </p>
                  <p className="mt-1 font-display text-6xl font-extrabold leading-none">
                    0<span className="ml-1 text-2xl">円</span>
                  </p>
                  <p className="mt-5 max-w-xs text-xs leading-relaxed text-text/60">
                    {campaign.entryNote}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
                <div className="bg-accent py-3 text-center font-display text-sm font-bold tracking-[0.2em] text-white">
                  {campaign.trial.title}
                </div>
                <div className="flex flex-1 flex-col justify-center gap-4 px-7 py-9 sm:px-10">
                  {campaign.trial.rows.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-sm font-bold">{r.label}</span>
                      <span className="font-display text-3xl font-extrabold">
                        {r.value}
                      </span>
                    </div>
                  ))}
                  <p className="mt-1 text-xs leading-relaxed text-text/60">
                    {campaign.trial.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 料金グループ */}
          <div className="mt-12 space-y-8">
            {priceGroups.map((g, gi) => (
              <Reveal key={g.name} delay={gi * 0.06}>
                <div className="rounded-3xl bg-card2/60 p-6 sm:p-10">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="section-eyebrow font-display text-[10px] font-semibold uppercase text-text/40">
                        {g.en}
                      </p>
                      <div className="mt-1.5 flex items-center gap-3">
                        <span className="h-6 w-1 rounded-full bg-accent" />
                        <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                          {g.name}
                        </h3>
                        {g.note && (
                          <span className="rounded-full border border-text/20 px-2.5 py-0.5 text-[11px] text-text/60">
                            {g.note}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {g.for.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-text/70 sm:text-sm"
                        >
                          <Check />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`mt-7 grid grid-cols-2 gap-4 ${
                      g.plans.length >= 4
                        ? "md:grid-cols-4"
                        : "md:mx-auto md:max-w-xl"
                    }`}
                  >
                    {g.plans.map((p) => (
                      <div
                        key={p.name}
                        className="overflow-hidden rounded-xl border border-line bg-card text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]"
                      >
                        <div className="bg-accent py-2.5 font-display text-sm font-bold text-white">
                          {p.name}
                        </div>
                        <div className="px-3 py-6">
                          <p className="text-[11px] tracking-wider text-text/50">
                            1回あたり
                          </p>
                          <p className="mt-1 font-display text-3xl font-extrabold">
                            {p.per}
                            <span className="ml-0.5 text-sm font-bold text-text/60">
                              円
                            </span>
                          </p>
                          <p className="mt-3 text-xs text-text/55">
                            {g.totalLabel} {p.total}円
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-text/50">{priceNote}</p>
        </section>

        {/* ============ VOICE ============ */}
        <section className="border-y border-line bg-card2/50 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionHead en="VOICE" title="お客様の声" center />
            </Reveal>
            <div className="mt-12">
              <VoiceCarousel />
            </div>
          </div>
        </section>

        {/* ============ ACCESS / FAQ ============ */}
        <section id="access" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <SectionHead en="ACCESS" title="アクセス" />
              <p className="mt-5 text-sm leading-relaxed text-text/70">
                完全予約制のプライベートジムです。詳しい住所・道順は、ご予約の際に個別にご案内いたします。安心してお越しください。
              </p>
              <dl className="mt-7 space-y-0 divide-y divide-line rounded-2xl border border-line bg-card px-6 py-2 shadow-sm">
                <div className="flex gap-4 py-3.5">
                  <dt className="w-20 shrink-0 text-sm text-text/50">所在地</dt>
                  <dd className="text-sm text-text/85">
                    {site.area}
                    <br />
                    <span className="text-xs text-text/45">
                      {site.areaNote}
                    </span>
                  </dd>
                </div>
                <div className="flex gap-4 py-3.5">
                  <dt className="w-20 shrink-0 text-sm text-text/50">
                    営業形態
                  </dt>
                  <dd className="text-sm text-text/85">{site.format}</dd>
                </div>
                <div className="flex gap-4 py-3.5">
                  <dt className="w-20 shrink-0 text-sm text-text/50">
                    営業時間
                  </dt>
                  <dd className="text-sm text-text/85">{site.hours}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHead en="FAQ" title="よくある質問" />
              <div className="mt-7">
                <Faq />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT（黒セクション） ============ */}
        <section id="contact" className="bg-accent py-24 text-white sm:py-32">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <Reveal>
              <SectionHead
                en="CONTACT"
                title="まずは、お気軽にご相談を。"
                center
                dark
              />
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70">
                ご予約・体験のお申し込み・ご質問は、Instagram の DM
                またはお電話で承っています。あなたの目標やお悩みをお聞かせください。
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-bold text-text transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Instagram DM で予約する
                </a>
                <a
                  href={`tel:${site.telLink}`}
                  className="w-full rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  電話する（{site.tel}）
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center gap-2 text-sm text-white/60">
                <a
                  href={`tel:${site.telLink}`}
                  className="transition-colors hover:text-white"
                >
                  TEL：{site.tel}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  Mail：{site.email}
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram：{site.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-line bg-bg py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
          <Image
            src="/images/logo-black.png"
            alt={site.fullName}
            width={96}
            height={70}
            className="h-auto w-24"
          />
          <p className="text-xs text-text/50">{site.area}</p>
          <p className="text-xs text-text/50">TEL：{site.tel}</p>
          <p className="mt-3 text-xs text-text/35">
            © {new Date().getFullYear()} {site.fullName}
          </p>
        </div>
      </footer>

      <MobileCTA />
    </>
  );
}
