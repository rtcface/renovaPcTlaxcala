const { getEntry } = require("astro:content");
const satori = require("satori");
const { render } = require("@resvg/resvg-js");
const { createElement } = require("react");
const { SITE_TITLE } = require("../../src/consts");
const {
  createCardBackgroundStyles,
  createCardCSSVariables,
  parseCardContent,
} = require("../../src/lib/utils");
const {
  KNOWLEDGE_CARD_THEME,
} = require("../../src/themes/knowledge-card-themes");
const { SLIDE_THEME_CONFIG } = require("../../src/themes/slide-card-themes");

// Import the logo as base64 or similar - for now, we'll use a placeholder
const logo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="; // Placeholder

async function generateCardOg(id, theme) {
  const card = await getEntry("cards", id);
  if (!card) {
    throw new Error(`Card with id ${id} not found`);
  }
  const cardContent = parseCardContent(card.body);
  if (!cardContent) {
    throw new Error("Error parsing card");
  }
  const parsedCard = cardContent.parsedData;

  const cardTheme =
    KNOWLEDGE_CARD_THEME[theme] || KNOWLEDGE_CARD_THEME.blackWhite;

  const cssVarString = createCardCSSVariables(cardTheme);
  const backgroundStyles = await createCardBackgroundStyles(cardTheme);

  const cardElement = createElement(
    "div",
    {
      style: {
        width: "1200px",
        height: "630px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        ...parseCSSVars(cssVarString),
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "50px 60px",
        ...backgroundStyles,
      },
    },
    createElement(
      "div",
      {
        style: {
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
      },
      createElement(
        "div",
        {
          style: {
            flex: 1,
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
            marginBottom: 40,
          },
        },
        createElement("div", {
          style: {
            backgroundColor: cardTheme.decorativeLineColor || "#4ade80",
            width: cardTheme.decorativeLineWidth || 6,
            height: cardTheme.decorativeLineHeight || 120,
            borderRadius: 3,
            flexShrink: 0,
          },
        }),
        createElement(
          "div",
          {
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            },
          },
          createElement(
            "div",
            {
              style: {
                color: cardTheme.titleColor || "#1f2937",
                fontSize: 48,
                fontWeight: cardTheme.titleFontWeight || 700,
                fontFamily:
                  cardTheme.titleFontFamily ||
                  "'Inter', 'Noto Sans SC', system-ui, sans-serif",
                letterSpacing: -0.5,
                lineHeight: 1.2,
                wordWrap: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
              },
            },
            parsedCard.title,
          ),
          createElement(
            "div",
            {
              style: {
                color: cardTheme.descriptionColor || "#4b5563",
                fontSize: 24,
                fontFamily:
                  cardTheme.descriptionFontFamily ||
                  "'Inter', 'Noto Sans SC', system-ui, sans-serif",
                lineHeight: 1.6,
                wordWrap: "break-word",
                overflowWrap: "break-word",
              },
            },
            parsedCard.description,
          ),
        ),
      ),
      createElement(
        "div",
        {
          style: {
            position: "absolute",
            bottom: 20,
            left: 60,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: 12,
          },
        },
        createElement(
          "div",
          {
            style: {
              fontSize: 40,
              fontWeight: 600,
              color: cardTheme.titleColor || "#1f2937",
              fontFamily: "'Noto Sans SC', sans-serif",
            },
          },
          SITE_TITLE,
        ),
      ),
      createElement(
        "div",
        {
          style: {
            position: "absolute",
            bottom: 20,
            right: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            zIndex: 3,
          },
        },
        createElement("img", {
          src: logo,
          style: {
            width: 120,
            height: 120,
            background: "white",
            borderRadius: 12,
            padding: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "2px solid rgba(255,255,255,0.8)",
          },
        }),
      ),
    ),
  );

  return cardElement;
}

async function generateSlideOg(id, theme) {
  const slide = await getEntry("slides", id);
  if (!slide) {
    throw new Error(`Slide with id ${id} not found`);
  }

  const themeConfig = SLIDE_THEME_CONFIG[theme] || SLIDE_THEME_CONFIG.black;

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const slideElement = createElement(
    "div",
    {
      style: {
        width: "1200px",
        height: "630px",
        fontFamily: themeConfig.textFont,
        background: themeConfig.background,
        display: "flex",
        position: "relative",
      },
    },
    createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: themeConfig.overlayColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 60px",
        },
      },
      createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: themeConfig.textColor,
            maxWidth: "900px",
            height: "100%",
          },
        },
        createElement(
          "h1",
          {
            style: {
              fontSize: 72,
              fontWeight: themeConfig.titleWeight,
              fontFamily: themeConfig.titleFont,
              textTransform: themeConfig.titleTransform,
              color: themeConfig.titleColor,
              marginBottom: 40,
              lineHeight: 1.1,
              wordWrap: "break-word",
              textAlign: "center",
            },
          },
          slide.data.title,
        ),
        createElement(
          "div",
          {
            style: {
              fontSize: 32,
              fontWeight: 400,
              fontFamily: themeConfig.textFont,
              color: themeConfig.textColor,
              marginBottom: 20,
              opacity: 0.9,
            },
          },
          slide.data.author || "foxgem",
        ),
        createElement(
          "div",
          {
            style: {
              fontSize: 28,
              fontWeight: 400,
              fontFamily: themeConfig.textFont,
              color: themeConfig.textColor,
              opacity: 0.8,
            },
          },
          slide.data.pubDate
            ? formatDate(new Date(slide.data.pubDate))
            : formatDate(new Date()),
        ),
      ),
    ),
    createElement(
      "div",
      {
        style: {
          position: "absolute",
          bottom: 30,
          left: 60,
          color: themeConfig.titleColor,
          fontSize: 24,
          fontWeight: 600,
        },
      },
      SITE_TITLE,
    ),
    createElement("img", {
      src: logo,
      style: {
        position: "absolute",
        bottom: 30,
        right: 60,
        width: 60,
        height: 60,
        background: "white",
        borderRadius: 8,
        padding: 1,
      },
    }),
  );

  return slideElement;
}

function parseCSSVars(cssVarString) {
  const obj = {};
  cssVarString.split(";").forEach((line) => {
    const [key, value] = line.split(":").map((s) => s.trim());
    if (key && value) obj[key.replace(/^--/, "")] = value;
  });
  return obj;
}

exports.handler = async (event) => {
  try {
    const { queryStringParameters } = event;
    const type = queryStringParameters?.type;
    const id = queryStringParameters?.id;
    const theme =
      queryStringParameters?.th || (type === "slide" ? "black" : "blackWhite");

    if (!type || !id) {
      return {
        statusCode: 400,
        body: "Missing type or id parameter",
      };
    }

    let element;
    if (type === "card") {
      element = await generateCardOg(id, theme);
    } else if (type === "slide") {
      element = await generateSlideOg(id, theme);
    } else {
      return {
        statusCode: 400,
        body: "Invalid type parameter",
      };
    }

    // Generate SVG using satori
    const svg = await satori(element, {
      width: 1200,
      height: 630,
      fonts: [], // Add fonts if needed
    });

    // Convert SVG to PNG using resvg
    const pngBuffer = render(svg, {
      fitTo: {
        mode: "width",
        value: 1200,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, immutable, no-transform, max-age=31536000",
      },
      body: pngBuffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error("[OG Generation Error]", error);
    return {
      statusCode: 500,
      body: `Failed to generate OG image: ${error.message}`,
    };
  }
};
