"use strict";

const { frontendDomain } = require("./config");

const careerFormTemplate = (data) => {
  return `
                <!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <!-- The title tag shows in email notifications, like Android 4.4. -->
    <meta charset="utf-8" />
    <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width" />
    <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting" />
    <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta
      name="format-detection"
      content="telephone=no,address=no,email=no,date=no,url=no"
    />
    <!-- Tell iOS not to automatically link certain text strings. -->

    <!-- CSS Reset : BEGIN -->
    <style>
      /* What it does: Remove spaces around the email design added by some email clients. */
      /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*='margin: 16px 0'] {
        margin: 0 !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. */
      table {
        border: 0;
        border-spacing: 0;
        border-collapse: collapse;
      }

      /* What it does: Forces Samsung Android mail clients to use the entire viewport. */
      #MessageViewBody,
      #MessageWebViewDiv {
        width: 100% !important;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode: bicubic;
      }

      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a {
        text-decoration: none;
      }

      /* What it does: A work-around for email clients automatically linking certain text strings. */
      /* iOS */
      a[x-apple-data-detectors],
      .unstyle-auto-detected-links a,
      .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      u + #body a,        /* Gmail */
        #MessageViewBody a  /* Samsung Mail */ {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
        color: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }
      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
        display: none !important;
      }

      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */

      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
          min-width: 320px !important;
        }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
          min-width: 375px !important;
        }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
          min-width: 414px !important;
        }
      }
    </style>
    <!-- What it does: Helps DPI scaling in Outlook 2007-2013 -->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>
      /* What it does: Hover styles for buttons and tags */
      .s-btn__primary:hover {
        background: #0077cc !important;
        border-color: #0077cc !important;
      }
      .s-btn__white:hover {
        background: #eff0f1 !important;
        border-color: #eff0f1 !important;
      }
      .s-btn__outlined:hover {
        background: rgba(0, 119, 204, 0.05) !important;
        color: #005999 !important;
      }
      .s-tag:hover,
      .post-tag:hover {
        border-color: #cee0ed !important;
        background: #cee0ed !important;
      }

      /* What it does: Styles markdown links that we can't write inline CSS for. */
      .has-markdown a,
      .has-markdown a:visited {
        color: #0077cc !important;
        text-decoration: none !important;
      }

      /* What it does: Styles markdown code blocks that we can't write inline CSS for. */
      code {
        padding: 1px 5px;
        background-color: #eff0f1;
        color: #242729;
        font-size: 13px;
        line-height: inherit;
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          sans-serif;
      }
      pre {
        margin: 0 0 15px;
        line-height: 17px;
        background-color: #eff0f1;
        padding: 4px 8px;
        border-radius: 3px;
        overflow-x: auto;
      }
      pre code {
        margin: 0 0 15px;
        padding: 0;
        line-height: 17px;
        background-color: none;
      }

      /* What it does: Styles markdown blockquotes that we can't write inline CSS for. */
      blockquote {
        margin: 0 0 15px;
        padding: 4px 10px;
        background-color: #fff8dc;
        border-left: 2px solid #ffeb8e;
      }
      blockquote p {
        padding: 4px 0;
        margin: 0;
        overflow-wrap: break-word;
      }

      /* What it does: Rounds corners in email clients that support it */
      .bar {
        border-radius: 5px;
      }
      .btr {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .bbr {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      @media screen and (max-width: 680px) {
        /* What it does: Forces table cells into full-width rows. */
        .stack-column,
        .stack-column-center {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          direction: ltr !important;
        }
        /* And center justify these ones. */
        .stack-column-center {
          text-align: center !important;
        }

        /* Hides things in small viewports. */
        .hide-on-mobile {
          display: none !important;
          max-height: 0 !important;
          overflow: hidden !important;
          visibility: hidden !important;
        }

        /* What it does: Utility classes to reduce spacing for smaller viewports. */
        .sm-p-none {
          padding: 0 !important;
        }
        .sm-pt-none {
          padding-top: 0 !important;
        }
        .sm-pb-none {
          padding-bottom: 0 !important;
        }
        .sm-pr-none {
          padding-right: 0 !important;
        }
        .sm-pl-none {
          padding-left: 0 !important;
        }
        .sm-px-none {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .sm-py-none {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .sm-p {
          padding: 20px !important;
        }
        .sm-pt {
          padding-top: 20px !important;
        }
        .sm-pb {
          padding-bottom: 20px !important;
        }
        .sm-pr {
          padding-right: 20px !important;
        }
        .sm-pl {
          padding-left: 20px !important;
        }
        .sm-px {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        .sm-py {
          padding-top: 20px !important;
          padding-bottom: 20px !important;
        }
        .sm-mb {
          margin-bottom: 20px !important;
        }

        /* What it does: Utility classes to kill border radius for smaller viewports. Used mainly on the email's main container(s). */
        .bar,
        .btr,
        .bbr {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    </style>
    <!-- Progressive Enhancements : END -->
  </head>

  <!--
    The email background color is defined in three places, just below. If you change one, remember to change the others.
    1. body tag: for most email clients
    2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
    3. mso conditional: For Windows 10 Mail
-->
  <body
    width="100%"
    style="
      margin: 0;
      padding: 0 !important;
      background: #f3f3f5;
      mso-line-height-rule: exactly;
    "
  >
    <center style="width: 100%; background: #f3f3f5">
      <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3f3f5;">
    <tr>
    <td>
    <![endif]-->

      <!-- Visually Hidden Preview Text : BEGIN -->
      <div
        style="
          display: none;
          font-size: 1px;
          line-height: 1px;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: scrp;;;
          mso-hide: all;
          font-family: sans-serif;
        "
      >
        ${data.title} ${data.name} apply for the position ${
    data.role
  }. Attached with CV/cover letter.
      </div>
      <!-- Visually Hidden Preview Text : END -->

      <div class="email-container" style="max-width: 680px; margin: 0 auto">
        <!--[if mso]>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">
            <tr>
            <td>
            <![endif]-->
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="max-width: 680px; width: 100%"
        >
          <!-- Logo : BEGIN -->
          <tr>
            <td style="padding: 20px 30px; text-align: left" class="sm-px"></td>
          </tr>
          <!-- Logo : END -->

          <!-----------------------------

                    EMAIL BODY : BEGIN

                ------------------------------>

          <tr>
            <td
              style="padding: 30px; background-color: #ffffff"
              class="sm-p bar"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="width: 100%"
              >
                <!-- Rich Text : BEGIN -->
                <tr>
                  <td
                    style="
                      padding-bottom: 15px;
                      font-family: arial, sans-serif;
                      font-size: 15px;
                      line-height: 21px;
                      color: #3c3f44;
                      text-align: left;
                    "
                  >
                    <h1
                      style="
                        font-weight: bold;
                        font-size: 27px;
                        line-height: 27px;
                        color: #0c0d0e;
                        margin: 0 0 15px 0;
                      "
                    >
                      Employment application form
                    </h1>
                    <!-- <p style="margin: 0 0 15px" class="has-markdown">
                      A starting point for more
                      <strong>simple transactional emails</strong> with a single
                      message. It can contain
                      <a href="#" style="color: #0077cc; text-decoration: none"
                        >links</a
                      >
                      or <strong>rich</strong> <em>text</em>.
                      <a
                        href="https://stackoverflow.design/email/base/typography#links-in-markdown"
                        target="_parent"
                        style="color: #0077cc; text-decoration: none"
                        >Read this</a
                      >
                      if text is written in markdown.
                    </p> -->
                    <!-- <p style="margin: 0 0 15px">context:</p> -->
                    <ul style="padding: 0; margin: 0; list-style-type: disc">
                      <li style="margin: 0 0 10px 30px">Title*: ${
                        data.title
                      }</li>
                      <li style="margin: 0 0 10px 30px">Name*: ${data.name}</li>
                      <li style="margin: 0 0 10px 30px">Phone*: ${
                        data.mobile
                      };</li>
                      <li style="margin: 0 0 10px 30px">Email*: ${
                        data.email
                      }</li>
                      ${
                        !!data.role
                          ? `<li style="margin: 0 0 10px 30px">Type of role you’d like to apply: ${data.role}</li>`
                          : ""
                      }
                      ${
                        !!data.resume
                          ? `<li style="margin: 0 0 10px 30px">CV: ${
                              data.resumeInputType === "file"
                                ? "upload as attachment"
                                : `<a href="${data.resume}" style="color: #0077cc; text-decoration: none; cursor: pointer;"
                      >${data.resume}</a>`
                            }</li>`
                          : ""
                      }
                      ${
                        !data.resume
                          ? `<li style="margin: 0 0 10px 30px">CV: No attachment and might sent/will send directly to hr@unity-risk.com.</li>`
                          : ""
                      }
                      ${
                        !!data.coverLetter
                          ? `<li style="margin: 0 0 10px 30px">Cover letter: ${
                              data.coverLetterInputType === "file"
                                ? "upload as attachment"
                                : `<a href="${data.coverLetter}" style="color: #0077cc; text-decoration: none; cursor: pointer;"
                      >${data.coverLetter}</a>`
                            }</li>`
                          : ""
                      }
                      ${
                        !data.coverLetter
                          ? `<li style="margin: 0 0 10px 30px">Cover letter: No attachment and might sent/will send directly to hr@unity-risk.com.</li>`
                          : ""
                      }
                    </ul>
                  </td>
                </tr>
                <!-- Rich Text : END -->
              </table>
            </td>
          </tr>

          <!-----------------------------

                    EMAIL BODY : END

                ------------------------------>
                <!-- Footer : BEGIN -->
                <tr>
                  <td style="padding: 30px" class="sm-p">
                    <table
                      align="left"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      width="100%"
                    >
                      <!-- Subscription Info : BEGIN -->
                      <tr>
                        <td
                          style="
                            padding-bottom: 10px;
                            font-size: 12px;
                            line-height: 15px;
                            font-family: arial, sans-serif;
                            color: #9199a1;
                            text-align: left;
                          "
                        >
                          You're receiving this message because ${
                            data.name
                          } sent from <a
                          href="${frontendDomain}/career"
                          >Unity career form</a>.
                        </td>
                      </tr>
                      <!-- Subscription Info : BEGIN -->
                      <!-- HR line : BEGIN -->
                      <tr>
                        <td style="padding: 15px 0" width="100%" class="sm-py">
                          <table
                            aria-hidden="true"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="width: 100%"
                          >
                            <tr>
                              <td
                                height="1"
                                width="100%"
                                style="
                                  font-size: 0;
                                  line-height: 0;
                                  border-top: 1px solid #d6d8db;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <!-- HR line : END -->
                      <!-- Sender Info : BEGIN -->
                      <tr>
                        <td
                          style="
                            padding-bottom: 5px;
                            font-size: 12px;
                            line-height: 15px;
                            font-family: arial, sans-serif;
                            color: #9199a1;
                            text-align: left;
                          "
                        >
                          <strong>Unity</strong>.
                          <span class="unstyle-auto-detected-links"
                            >+886-2-2508-0488</span
                          >
                        </td>
                      </tr>
                      <!-- Sender Info : END -->
                    </table>
                  </td>
                </tr>
                <!-- Footer : END -->
        </table>
      </div>
      <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    <![endif]-->
    </center>
  </body>
</html>
                `;
};

module.exports = careerFormTemplate;
