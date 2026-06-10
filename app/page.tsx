import Image from "next/image";
import {
  site,
  concepts,
  trainer,
  menus,
  plans,
  priceNote,
} from "@/src/data/site";
import { Header } from "@/src/components/Header";
import { MobileCTA } from "@/src/components/MobileCTA";
import { CustomCursor } from "@/src/components/CustomCursor";
import { Reveal } from "@/src/components/Reveal";
import { Stats } from "@/src/components/Stats";
import { VoiceCarousel } from "@/src/components/VoiceCarousel";
import { Faq } from "@/src/components/Faq";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="section-eyebrow font-display text-xs font-semibold uppercase text-accent">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pb-24 md:pb-0">
        {/* ============ HERO ============ */}
        <section
          id="hero"
          className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
        >
          <Image
            src="/images/gym-interior.jpg"
            alt="STUDIO YU のトレーニング空間"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/70 to-bg" />
          <div className="absolute inset-0 bg-bg/40" />

          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <Eyebrow>Private Personal Gym — Okayama</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="fluid-hero mt-5 font-extrabold tracking-tight">
                鍛える、整える、
                <br className="sm:hidden" />
                続けられる。
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-text/80 sm:text-base">
                {site.area}の完全マンツーマン・パーソナルジム。
                <br className="hidden sm:block" />
                あなただけの空間で、一生使える体づくりを。
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  体験・ご予約はこちら
                </a>
                <a
                  href="#concept"
                  className="w-full rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold text-text transition-colors hover:border-accent sm:w-auto"
                >
                  STUDIO YU について
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CONCEPT ============ */}
        <section id="concept" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>Concept</Eyebrow>
            <h2 className="fluid-h2 mt-3 font-extrabold">
              「続けられる」を、設計する。
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text/70 sm:text-base">
              ただ追い込むだけでは続きません。STUDIO YU
              は、姿勢や動きの質から整え、生活に馴染む強度であなたの変化を伴走します。
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {concepts.map((c, i) => (
              <Reveal key={c.no} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(59,158,255,0.5)]">
                  <span className="font-display text-4xl font-extrabold text-accent/30">
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

        {/* ============ STATS ============ */}
        <section className="border-y border-white/10 bg-card/40 py-20">
          <div className="mx-auto max-w-5xl px-5">
            <Reveal>
              <Stats />
            </Reveal>
          </div>
        </section>

        {/* ============ TRAINER ============ */}
        <section id="trainer" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl">
                <Image
                  src={trainer.image}
                  alt={trainer.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>Trainer</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                {trainer.name}
              </h2>
              <p className="mt-1 font-display text-sm tracking-widest text-text/50">
                {trainer.nameEn}
              </p>
              <p className="mt-3 text-sm text-accent">{trainer.role}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trainer.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-card2 px-3 py-1.5 text-xs text-text/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
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
          className="border-y border-white/10 bg-card/40 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <Eyebrow>Menu</Eyebrow>
              <h2 className="fluid-h2 mt-3 font-extrabold">対応メニュー</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {menus.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="group flex h-full gap-5 rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                    <span className="font-display text-2xl font-extrabold text-accent/40">
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
            <Eyebrow>Price</Eyebrow>
            <h2 className="fluid-h2 mt-3 font-extrabold">料金プラン</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    p.popular
                      ? "border-accent bg-card2 shadow-[0_20px_50px_-20px_rgba(59,158,255,0.6)]"
                      : "border-white/10 bg-card"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-bg">
                      人気
                    </span>
                  )}
                  <h3 className="text-center text-sm font-bold text-text/80">
                    {p.name}
                  </h3>
                  <div className="mt-4 text-center">
                    <span className="font-display text-4xl font-extrabold">
                      {p.price}
                    </span>
                    <span className="ml-1 text-base text-text/70">{p.unit}</span>
                  </div>
                  <p className="mt-3 text-center text-xs text-text/50">{p.per}</p>
                  <a
                    href="#contact"
                    className={`mt-7 rounded-full py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                      p.popular
                        ? "bg-accent text-bg"
                        : "border border-white/20 text-text"
                    }`}
                  >
                    このプランで相談
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-text/50">{priceNote}</p>
        </section>

        {/* ============ VOICE ============ */}
        <section className="border-y border-white/10 bg-card/40 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="text-center">
                <Eyebrow>Voice</Eyebrow>
                <h2 className="fluid-h2 mt-3 font-extrabold">お客様の声</h2>
              </div>
            </Reveal>
            <div className="mt-12">
              <VoiceCarousel />
            </div>
          </div>
        </section>

        {/* ============ ACCESS / FAQ ============ */}
        <section id="access" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Access</Eyebrow>
              <h2 className="fluid-h2 mt-3 font-extrabold">アクセス</h2>
              <div className="mt-6 flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-white/25 bg-card2 text-center text-xs text-text/40">
                地図は住所確定後に掲載します
                <br />
                （Google マップ埋め込み予定）
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 text-text/50">所在地</dt>
                  <dd className="text-text/85">
                    {site.area}
                    <br />
                    <span className="text-xs text-text/40">{site.areaNote}</span>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 text-text/50">営業形態</dt>
                  <dd className="text-text/85">{site.format}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 text-text/50">営業時間</dt>
                  <dd className="text-text/85">{site.hours}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 text-text/50">オープン</dt>
                  <dd className="text-text/85">{site.open}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="fluid-h2 mt-3 font-extrabold">よくある質問</h2>
              <div className="mt-6">
                <Faq />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section
          id="contact"
          className="border-t border-white/10 bg-card/40 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-3xl px-5 text-center">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="fluid-h2 mt-3 font-extrabold">
                まずは、お気軽にご相談を。
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-text/70">
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
                  className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Instagram DM で予約する
                </a>
                <a
                  href={`tel:${site.telLink}`}
                  className="w-full rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold text-text transition-colors hover:border-accent sm:w-auto"
                >
                  電話する（{site.tel}）
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center gap-2 text-sm text-text/60">
                <a href={`tel:${site.telLink}`} className="hover:text-accent">
                  TEL：{site.tel}
                </a>
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  Mail：{site.email}
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Instagram：{site.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-white/10 bg-bg py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
          <div className="font-display text-xl font-extrabold tracking-wide">
            {site.name}
          </div>
          <p className="text-xs text-text/50">{site.area}</p>
          <p className="text-xs text-text/50">TEL：{site.tel}</p>
          <p className="mt-3 text-xs text-text/35">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>

      <MobileCTA />
    </>
  );
}
