FROM andredumas/github-pages

WORKDIR /site

RUN gem install bundler

COPY ["Gemfile", "*.gemspec", "/site/"]
RUN ls -al /site
RUN bundle install
