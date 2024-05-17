<div align="center">
  <h1>Autocomplete</h1>
  <h3>Get autocomplete anywhere on the web.<h3>
  <a href="https://twitter.com/passionandfury">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40passionandfury&style=social&url=https%3A%2F%2Ftwitter.com%2Falexdotjs" />
  </a>
  <br />
  <br />
  <figure>
    <img src="https://assets.trpc.io/www/v10/v10-dark-landscape.gif" alt="Demo" />
    <figcaption>
      <p align="center">
        The client above is <strong>not</strong> importing any code from the server, only its type declarations.
      </p>
    </figcaption>
  </figure>
</div>

<br />

> [!NOTE]
>
> In its current version, autocomplete is only available on `<textarea />` elements.

## How It Works

Autocomplete uses LLMs like GPT-4o and Groq (llama3-70b-8192) to complete the next part of a user's sentence. Autocomplete uses the existing sentance and the current URL as context.

## Quickstart

In order to get access to autocomplete anywhere on the web, you'll need to:

- Upload the extension to chrome under [chrome://extensions/](chrome://extensions/).
- Host your backend on [Railway](https://railway.app) (or any other hosting provider).

## Walkthrough

**Uploading the extension to chrome:**

- Clone this repository
- Head to [chrome://extensions/](chrome://extensions/)
- Enable Developer Mode by clicking the toggle switch in the top right
- Click "Load Unpacked" in the top left
- Select the `Extension` folder inside the cloned repository

**Hosting your backend:**

- Head to [Railway](https://railway.app)
- Click "New Project"
- Click "Deploy from a GitHub Repo"
- Find the cloned repository in your GitHub account and deploy
- Go to settings and change Root Directory to `/server` and redeploy
- While in settings, generate a domain
- Add

## Support

If you enjoy using Autocomplete and want to support me, you can DM me on [twitter](https://x.com/passionandfury).
