FROM ubuntu

RUN apt-get update
RUN apt-get -y install build-essential zlib1g-dev ruby-dev ruby nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/

RUN gem install github-pages -v 39
RUN gem install bundler

EXPOSE 4000

VOLUME /site
WORKDIR /site

COPY ["Gemfile", "*.gemspec", "/site/"]
RUN bundle install

ENTRYPOINT ["jekyll"]
