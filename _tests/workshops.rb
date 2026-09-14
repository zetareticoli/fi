# Run with: bundle exec ruby _tests/workshops.rb
require 'jekyll'

def assert(condition, message)
  raise message unless condition
end

[true, false].each do |collapsible|
  site = Jekyll::Site.new(Jekyll.configuration('quiet' => true, 'destination' => '/private/tmp/fi-workshops-test'))
  site.reset
  site.read
  site.generate
  courses = site.collections.fetch('workshops').docs.select { |doc| doc.data['layout'] == 'workshop' }
  assert(courses.size == 2, 'Expected two courses')
  courses.each do |doc|
    doc.data['faq_collapsible'] = collapsible
    doc.data['program_collapsible'] = collapsible
  end
  site.render
  courses.each do |doc|
    html = doc.output
    label = "#{doc.basename_without_ext}, collapsible=#{collapsible}"
    assert(!html.include?('asset-preview'), "Preview logos leaked into production: #{label}") if Jekyll.env == 'production'
    assert(html.include?('<html lang="it"'), "Language: #{label}")
    assert(!html.include?('mobile-menu-btn') && !html.include?('site-nav'), "Site navigation leaked: #{label}")
    positions = %w[learn details teacher testimonials faq iscrizione].map { |id| html.index("id=\"#{id}\"") }
    assert(positions.all? && positions == positions.sort, "Section order: #{label}")
    benefits = html[/<section[^>]*id="learn".*?<\/section>/m]
    assert(benefits.scan(/<h3\b/).size == 4, "Four takeaways: #{label}")
    %w[faq details].each do |id|
      section = html[/<section[^>]*id="#{id}".*?<\/section>/m]
      assert(section.include?('<details ') == collapsible, "Disclosure mode: #{id} #{label}")
      assert(section.include?('<summary ') == collapsible, "Summary mode: #{id} #{label}")
    end
    assert(html.include?(doc.data.fetch('offer').fetch('url')), "Checkout URL changed: #{label}")
    assert(html.include?('plausible-event-name=Buy+Workshop'), "Checkout tracking lost: #{label}")
    assert(html.include?("https://francescoimprota.com#{doc.url}"), "Canonical URL: #{label}")
    assert(!html.include?('{{') && !html.include?('{%'), "Unrendered Liquid: #{label}")
    html.scan(/<img[^>]*src="([^"]+)"/).flatten.grep(/^\//).each do |src|
      assert(File.exist?(File.join(site.source, src.delete_prefix('/'))), "Missing image #{src}")
    end
    puts "PASS #{doc.url} (collapsible=#{collapsible})"
  end
end
