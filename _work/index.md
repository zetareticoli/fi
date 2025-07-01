---
layout: full
headline: Experience
summary: My professional journey as a designer, showcasing my notable work and experience across the years.
lead: I design intuitive digital products with a focus on user experience. Expert in design systems, usability, and accessibility.
permalink: /experience/
---


<section class="spacing-sections inner outer-margin">
	{% if page.headline %}
		<h1 class="headline-featured">{{ page.headline }}</h1>
	{% endif %}
	{% if page.lead %}
		<p class="lead color-text-light">{{ page.lead }}</p>
	{% endif %}
</section>

<section class="spacing-sections spacing-sections-inset spacing-outer background-emphasis">
  <div class="inner">
    <h2 class="headline-default">Notable Work</h2>
  </div>
  <div class="inner-large">
    <div class="list-projects mb-l">
    {% for work in site.data.works %}
      {% include featured.html %}
    {% endfor %}
    </div>
    <p class="text-small color-text-weak text-center">View my design work and project screenshots on my <a class="link-light link-underline" href="https://dribbble.com/zetareticoli" target="_blank">Dribbble profile</a>.</p>
  </div>
</section>

<section class="spacing-sections inner outer-margin">
  <h2 class="headline-default">Experience across the years</h2>
  <ul class="content-list m-none mb-l">
  {% for client in site.data.clients %}
    <li class="content-list__item flex">
      <span class="content-list__year text-small color-text-weak mb-s">{{client.year}}</span>
      <h3 class="content-list__title headline-tertiary mb-s">{{client.title}}</h3>
      <p class="content-list__desc mb-s color-text-light">{{client.desc}}</p>
    </li>
  {% endfor %}
  </ul>
  <p class="text-small color-text-weak text-center"> For a complete overview of my professional experience, visit my <a class="link-light link-underline" href="https://dribbble.com/zetareticoli" target="_blank">LinkedIn profile</a>.</p>
</section>

<section class="spacing-sections-inset spacing-outer background-weak outer-margin">
  <div class="inner">
    <h2 class="headline-default">How I Work</h2>
    <p class="lead color-text-light">
      I believe in a hands-on approach and working in cross-functional teams that include stakeholders as partners in the project.
    </p>
    <div class="l-pair-cols">
      <article>
        <h3 class="caption color-text-weak uppercase">Expertise</h3>
        <ul class="list-none">
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Leading cross-functional teams</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Architecting Design Systems</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Creating advanced prototypes</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Responsive design</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Writing styleguides</li>
        </ul>
        <h3 class="caption color-text-weak uppercase">Methods</h3>
        <ul class="list-none mb-xl">
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Sprints</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Atomic design</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Continuous improvement</li>
          <li class="headline-secondary mb-s"><span class="color-text-primary">¬</span> Agile</li>
        </ul>
      </article>
      <article>
        <p class="body-default">
          I prefer a practical approach and collaborating with cross-functional teams that include stakeholders as project partners.
        </p>
        <p>
          I enjoy developing, learning, teaching, and working with colleagues who are honest, respectful, and provide direct feedback. I believe that the team is crucial, and it's important to understand not only their skills but also their personalities.
        </p> 
        <p>
          Thorough research is essential in every project, as it helps us understand the business and its users. Ideation takes various forms, but it's crucial to rapidly test ideas with real users to ensure that we're headed in the right direction.
        </p>
      </article>
    </div>
  </div>
</section>

<section class="spacing-sections-inset inner">
  {% include box-subscribe.html %}
</section>

