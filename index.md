---
# index.md (homepage)
layout: default
title: "Francesco Improta - Design Lead UX/UI & Design Systems"
nav: true
nav_title: "Home"
nav_order: 0
permalink: /
---
<div class="min-h-screen">
  <!-- Hero -->
  <section class="px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
      <div class="lg:col-span-8 flex flex-col">
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl clamp-3 font-bold leading-tight">
          Hello — I'm Francesco
        </h1>
        <p class="text-2xl text-primary font-medium">Design Lead UX/UI & Design Systems</p>
        <p class="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I design digital products and design systems that simplify complex ideas into intuitive user experiences.
        </p>
        <a href="{{ '/about' | relative_url }}" class="mt-8 text-sm text-accent underline font-medium hover:opacity-60 transition-opacity underline-offset-2">
          About me →
        </a>
      </div>
      <div class="lg:col-span-4 flex flex-col justify-start">
      
        <!-- placeholder for the image -->
        <!-- <img src="/img/francesco-improta.webp" alt="Francesco Improta" class="w-full h-full object-cover"> -->
      </div>
    </div>
  </section>

  <div class="mx-6 lg:mx-10 hairline"></div>

  <!-- Recent Artifacts -->
  <section class="grid md:grid-cols-12 gap-8 px-6 lg:px-10 py-12 lg:py-16">
    <div class="md:col-span-6 flex flex-col">
      <h2 class="meta-tag text-sm uppercase tracking-widest mb-8">RECENT WORK</h2>
      {% for item in site.data.work.featured limit: 3 %}
      <a href="{{ item.url | relative_url }}" class="animate-in group grid lg:grid-cols-12 gap-4 py-3.5 hairline items-start hover:bg-secondary/50 transition-colors px-3" style="transition-delay: {{ forloop.index | times: 120 }}ms;">
        <span class="col-span-6"><img src="{{ item.image | relative_url }}" alt="{{ item.title }}" class="w-full max-h-48 object-cover"></span>
        <div class="col-span-6 flex flex-col gap-1">
          <span class="text-lg group-hover:text-accent transition-colors">{{ item.title }}</span>
          <span class="text-sm text-muted-foreground">{{ item.period }}</span>
        </div>
      </a>
      {% endfor %}
      <a href="{{ '/work' | relative_url }}" class="text-sm text-muted-foreground underline hover:text-accent transition-colors mt-4 ml-3 underline-offset-2">All work →</a>
    </div>
    <div class="md:col-span-6 flex flex-col">
      <h2 class="meta-tag text-sm uppercase tracking-widest mb-8">RECENT WRITING</h2>
      {% assign recent_posts = site.posts %}
      {% for post in recent_posts limit: 4 %}
      <a href="{{ post.url | relative_url }}" class="animate-in group grid grid-cols-12 gap-4 py-3.5 hairline items-center hover:bg-secondary/50 transition-colors px-3" style="transition-delay: {{ forloop.index | times: 120 }}ms;">
        <span class="col-span-6 lg:col-span-7 text-md group-hover:text-accent transition-colors">{{ post.title }}</span>
        <span class="col-span-3 text-right meta-tag hidden sm:block">{{ post.date | date: "%-d %b %Y" }}</span>
      </a>
      {% endfor %}
      <a href="{{ '/writing' | relative_url }}" class="text-sm text-muted-foreground underline hover:text-accent transition-colors mt-4 ml-3 underline-offset-2">All writing →</a>
    </div>

  </section>
</div>