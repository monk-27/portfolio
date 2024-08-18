
# Armaan Jaj | Developer Portfolio

Welcome to the 3rd iteration of my developer portfolio! Built on Next.js, this project showcases my journey as a full-stack web developer, featuring a collection of innovative projects that blend creativity with technical expertise. Smooth animations and interactive elements add a dynamic and engaging user experience, making the portfolio both visually appealing and functional.


![og-image](https://github.com/user-attachments/assets/bd2c0f3a-a583-4a31-8ebe-e63a56ab0e7d)


## Sharing Credit and Collaboration
In the spirit of open source, collaboration, and continuous learning, I believe in the importance of giving proper credit where it’s due. If you’re contributing to this project or using any part of it as inspiration for your own work, please acknowledge the original effort.

Plagiarism undermines the trust and integrity that make open source possible. If you find yourself inspired by code, designs, or ideas from this project, I'd love to hear about it! Sharing credit not only respects the hard work of others but also encourages a stronger and more supportive developer community.

Remember, this project represents countless hours of dedication and learning. If you’re using or building upon it, a simple shoutout goes a long way. Let’s keep open source positive, collaborative, and respectful.

Thank you for being part of this journey!
## Authors

- [@armaanjaj](https://github.com/armaanjaj)


## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/)
- **API Integration:** [GitHub GraphQL API](https://docs.github.com/en/graphql)
- **Deployment:** [Vercel](https://vercel.com/)
- **Version Control:** [GitHub](https://github.com/armaanjaj)


## Features

- Dynamic and responsive UI
- Integrated GitHub API for real-time activity tracking
- Custom animations using GSAP for smooth transitions
- Optimized for performance and accessibility

Explore the code, check out my projects, and feel free to connect if you're interested in collaboration or feedback. Let's create something extraordinary together!


## API Reference

#### Get all projects

```http
  GET /api/projects
```

#### Get per year contributions data from GitHub

```http
  GET /api/github-contributions?username=GITHUB_USERNAME&from=startoftheyear&to=endoftheyear
```

| Parameter | Type     | Description                       | Example |
| :-------- | :------- | :-------------------------------- |:-------------------------------- |
| `GITHUB_USERNAME`      | `string` | **Required**. Account to fetch from | armaanjaj |
| `startoftheyear`      | `string` | **Required**. start of the year | 2024-01-01T00:00:00Z |
| `endoftheyear`      | `string` | **Required**. end of the year | 2024-12-31T23:59:59Z |


#### Get latest commit info from GitHub

```http
  GET /api/github-latest-commit?owner=GITHUB_USERNAME
```

| Parameter | Type     | Description                       |Example |
| :-------- | :------- | :-------------------------------- |:-------------------------------- |
| `GITHUB_USERNAME`      | `string` | **Required**. Account to fetch from | armaanjaj |

#### Get languages data from GitHub

```http
  GET /api/github-languages?username=GITHUB_USERNAME
```

| Parameter | Type     | Description                       |Example |
| :-------- | :------- | :-------------------------------- |:-------------------------------- |
| `GITHUB_USERNAME`      | `string` | **Required**. Account to fetch from | armaanjaj |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GITHUB_TOKEN` - GitHub account access token

`GITHUB_USERNAME` - Your GitHub username

`WEB_DOMAIN` - Domain name which will used inside sitemap.ts and robots.ts

`FORMSPARK_KEY` - Formspack form id
## Run Locally

Clone the project

```bash
  git clone https://github.com/armaanjaj/portfolio_v3.git
```

Go to the project directory

```bash
  cd portfolio_v3
```

Install dependencies

```bash
  npm install
```

- Create .env.local file

Start the server

```bash
  npm run dev
```


## Lessons Learned

Seamless UI/UX Design:
- Designing a visually appealing and responsive UI was a top priority. I experimented with modern design principles and smooth animations to create a polished, interactive user experience. Through this, I learned the importance of balancing aesthetics with performance and accessibility.

Optimizing Performance:
- Performance optimization was crucial, especially when working with a dynamic Next.js app. I focused on reducing load times and improving client-side rendering performance by applying best practices like image optimization, code-splitting, and lazy loading components. This taught me how minor tweaks can have a significant impact on the overall user experience.

Integrating APIs:
- I integrated real-time data from the GitHub API to display my latest contributions and activity. This process helped me improve my skills in API integration, error handling, and state management, as well as reinforcing the importance of caching data for performance.

Mastering TailwindCSS:
- TailwindCSS allowed me to quickly build and style my components with ease. Through this project, I deepened my understanding of utility-first CSS, custom themes, and responsive design. It highlighted how a well-structured CSS framework can streamline the development process while maintaining flexibility in design.

Leveraging Animations with GSAP:
- Implementing custom animations with GSAP added a dynamic feel to my portfolio. This experience taught me how animations can enhance user engagement, but also highlighted the importance of subtlety and timing to avoid overwhelming the user.

Managing State in Complex Applications:
- As the project grew, managing state became more complex. I applied concepts like hooks and maintainable structure. This reinforced my understanding of managing component hierarchies and the importance of clean architecture in React applications.

User Feedback & Iteration:
- Building a portfolio is an iterative process. I incorporated feedback from peers and my own experiences to refine the design and functionality. This iterative approach emphasized the importance of listening to user needs and continuously improving.
## Feedback

If you think either any part of this project can be done better or can be optimized or if you have any feedback, please reach out to me at armaan.jaj@gmail.com

## Contributing

Contributions are always welcome and appreciated! Whether you're fixing a bug, improving documentation, or adding a new feature, your efforts help make this project better for everyone.

### Ways to Get Started

1. **Report a Bug**: If you find a bug, please open an issue with details and steps to reproduce.
2. **Fix a Bug**: Check out the list of open issues and see if there's anything you can help with.
3. **Suggest an Enhancement**: Have an idea for a new feature? Open an issue to discuss it, or implement it and submit a pull request.
4. **Improve Documentation**: Contributions to documentation are just as valuable as code contributions. If you notice something unclear or outdated, feel free to submit changes.
5. **Review Pull Requests**: Code review is an essential part of the development process. If you see an open pull request, feel free to review and provide feedback.

### How to Contribute

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request.

### Code of Conduct

We are committed to fostering an inclusive and respectful community. Please:

- Be respectful and considerate of others.
- Provide constructive feedback.
- Be welcoming to newcomers.
- Report any unacceptable behavior.

By participating in this project, you agree to abide by this Code of Conduct.

Thank you for your contributions!
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Navy | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Green | ![#4CCD9A](https://via.placeholder.com/10/4CCD9A?text=+) #4CCD9A |
| Light gray | ![#E5E7EB](https://via.placeholder.com/10/E5E7EB?text=+) #E5E7EB |

## Related

Here are the previous iterations of the portfolio

- [portfolio_v2](https://github.com/armaanjaj/portfolio_v2)

- [portfolio_v1](https://github.com/armaanjaj/portfolio_v1)

