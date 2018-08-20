# Ark Labs Landing Page

Ark Labs developed a Token Exchange Campaign (TEC) website for the Ark Ecosystem, hosting Ark based projects and their Initial Coin Offering (ICO) as a TEC. For more information contact Ark Labs at https://arklabs.us

## Code

This repo contains an application that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.
It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Setup

### 1. Create an app

- Fork this repository on GitHub
- Create a new Netlify account
- Once logged in, add a new application using [this link](https://app.netlify.com/start) where you will authorize GitHub access and select repository you've just created

### 2. Enable Identity and Git Gateway

Netlify's Identity and Git Gateway services allow you to manage CMS users for your site without requiring them to have an account with your Git host or commit access on your repo. All from your site dashboard on Netlify:

- Go to top menu > Settings > Identity, and then click the Enable Identity service button.
- Go to top menu > Settings > Identity > Registration, select from the default of 'Open' to 'Invite only'. In most cases, you'll want only invited users to access your CMS as a secure option.
- If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under External OAuth providers.
- Scroll down to Services > Git Gateway, and click the Enable Git Gateway button. This will authenticate with your Git host and generate an API access token. In this case, we're leaving the Roles field blank, which means any logged in user may access the CMS. For information on changing this, check the Netlify Identity documentation.

### 3. Deploy

Last step is to rebuild your application and redeploy to make sure that the git gateway settings from the previous step are working correctly. In order to do that, simply go to the top menu "Deploys" section in the Netlify dashboard, and click the "Trigger deploy" button. Wait until the site deployment finishes ~2-3 min.

Go back to the top of the page and click on the "Preview deploy" link.

Your site shold be live on Netlify. 

### 4. Users / Admin Access

Top menu > Identity, click on the Invite users button. Add emails of admin user(s) to invite them to your new Netlify Site. Click Send.

Find the email titled: "You've been invited to join <site>-xxxxx.netlify.com" and accept the invite by clicking on the "Accept the invite" link. This should take you to the new site and ask you to set a password. Once set, you will be logged in and see the admin panel. Next, you will have to click on the "Homepage" link that doesn't look like a link to get to the "Content manager" where you can edit your new site to your liking.

Later, you can always access the CMS admin panel by browsing to the `https://<site>/admin` path for your deployed application.

## Optional: Develop Locally

```
$ git clone https://github.com/vRobM/Ark-Labs-TEC-website.git
$ cd TEC-website
$ yarn
$ yarn start
```

To test the CMS locally, you'll need run a production build of the site:

```
$ yarn build
$ yarn serve
```
