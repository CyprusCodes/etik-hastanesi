import { useEffect } from "react"
import { Instagram, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

const instagramPosts = [
  "https://www.instagram.com/p/DXTqJAEAEmp/",
  "https://www.instagram.com/p/DVvF_3oDKAq/",
  "https://www.instagram.com/reel/DWln-O5jM-A/",

]

export function SocialMediaSection() {
  const { t } = useTranslation(["hospital"])

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    )

    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
      script.onload = () => window.instgrm?.Embeds?.process()
    } else {
      window.instgrm?.Embeds?.process()
    }
  }, [])

  return (
    <section className="bg-secondary py-10 lg:py-14">
      <div className="container-narrow">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t("hospital:socialMediaSection.badge")}
            </span>

            <h2 className="heading-2 mt-2">
              {t("hospital:socialMediaSection.title")}
            </h2>

            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              {t("hospital:socialMediaSection.description")}
            </p>
          </div>

          <a
            href="https://www.instagram.com/etikhastanesi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hospital:socialMediaSection.instagramAriaLabel")}
            className="inline-flex items-center justify-center rounded-xl border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <Instagram className="mr-2 h-4 w-4" />
            {t("hospital:socialMediaSection.followButton")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((postUrl) => (
            <div
              key={postUrl}
              className="group overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-[490px] overflow-hidden rounded-2xl bg-secondary/30">
                <div className="origin-top scale-[0.9]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={postUrl}
                    data-instgrm-version="14"
                    style={{
                      background: "#fff",
                      border: 0,
                      margin: "0 auto",
                      maxWidth: "540px",
                      minWidth: "326px",
                      padding: 0,
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void
      }
    }
  }
}
