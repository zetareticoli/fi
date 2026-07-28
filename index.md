---
# index.md (homepage)
layout: default
title: "Francesco Improta - Design Lead UX/UI & Design Systems"
nav: true
nav_title: "Home"
nav_order: 0
permalink: /
---
<div class="min-h-screen max-w-screen-7xl">
  <!-- Hero -->
  <section class="px-6 lg:px-10 pt-12 lg:pt-32 pb-16 lg:pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
      <div class="col-span-12 max-w-4xl flex flex-col">
        <h1 class="font-heading text-4xl sm:text-5xl lg:text-5xl clamp-3 tracking-tight font-bold leading-tight">
          Hi, I'm Francesco. <br><span class="font-medium text-muted-foreground">I lead the process of building digital products and design systems.</span>
        <!-- <p class="text-2xl text-primary font-medium">{{ site.description }}</p> -->
        <!-- <p class="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
        </p> -->
       </h1>
        <a href="{{ '/about' | relative_url }}" class="mt-8 text-sm underline font-medium hover:opacity-60 transition-opacity underline-offset-2">
          About me →
        </a>
      </div>
    </div>
  </section>

  <div class="mx-6 lg:mx-10 hairline"></div>

  <!-- Selected Work -->
  <section class="grid md:grid-cols-12 gap-24 md:gap-8 px-6 lg:px-10 py-16 lg:py-20 max-w-screen-7xl">
    <div class="md:col-span-6 flex flex-col">
      <h2 class="meta-tag text-sm uppercase tracking-widest mb-8">Recent Work</h2>
      {%- assign sorted_work = site.work | sort: "period" | reverse -%}
      {% for item in sorted_work limit: 2 %}
      <a href="{{ item.url | relative_url }}" class="col-span-1 xl:col-span-2 flex flex-col animate-in group gap-4 py-3.5 hairline items-start transition-colors" style="transition-delay: {{ forloop.index | times: 120 }}ms;">
        <span class=""><img src="{{ item.cover | relative_url }}" alt="{{ item.title }}" class="w-full max-h-screen object-cover"></span>
        <div class="flex flex-col gap-1">
          <span class="text-lg group-hover:text-accent transition-colors">{{ item.title }}</span>
          <span class="text-sm text-muted-foreground">{{ item.period }}</span>
        </div>
      </a>
      {% endfor %}
      <a href="{{ '/work' | relative_url }}" class="text-sm text-muted-foreground underline hover:text-accent transition-colors mt-4 ml-3 underline-offset-2">All work →</a>
    </div>
    <div class="md:col-span-6 flex flex-col">
      <h2 class="meta-tag text-sm uppercase tracking-widest mb-8 pl-3">RECENT WRITING</h2>
      {% assign recent_posts = site.posts %}
      {% for post in recent_posts limit: 6 %}
      <a href="{{ post.url | relative_url }}" class="animate-in group grid grid-cols-12 gap-4 py-3.5 hairline items-center transition-colors px-3" style="transition-delay: {{ forloop.index | times: 120 }}ms;">
        <span class="col-span-9 text-md group-hover:text-accent transition-colors">{{ post.title }}</span>
        <span class="col-span-3 text-right meta-tag">{{ post.date | date: "%-d %b %Y" }}</span>
      </a>
      {% endfor %}
      <a href="{{ '/writing' | relative_url }}" class="text-sm text-muted-foreground underline hover:text-accent transition-colors mt-4 ml-3 underline-offset-2">All writing →</a>
    </div>

  </section>
</div>