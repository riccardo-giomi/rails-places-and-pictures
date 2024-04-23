# Places and Pictures

An application created as an exercise, it allows to save places selected from a
map and upload pictures which will be associated with that place.

The app's main page will show a map marking all places on the planet, with
clustering and a smart initial zoom.

It will Start from a "normal" Rails application created with my
[quickstart template](https://github.com/riccardo-giomi/rails-7.1-quickstart),
and made into a Hotwire application.

For the map and its interface the application uses
[Lefleat](https://leafletjs.com/) and
[OpenStreetMap](https://www.openstreetmap.org).

Geo Search is implemented with
[Leaflet GeoSearch](https://github.com/smeijer/leaflet-geosearch).

Maker clustering is done via
[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster).


## Installation

The following commands will download the app's code, download or update the
required Ruby Gems, and prepare a database for the application.

``` bash
git clone https://github.com/riccardo-giomi/rails-places-and-pictures
cd rails-places-and-pictures
bundle
bin/rails db:prepare
```

Some example data with fake pictures is available as seeds if you want:
``` bash
bin/rails db:seed
```

*Note:* it might take a while to create the twenty pictures with image.

*Important*: dropping the database, or replanting the seeds does not seem to
remove the picture files created this way.
The fastest way that I have found to clear the old files is to simply remove all
directories from `storage/` or, if dropping the database, just remove `storage`
all together (it will be recreated as needed).

You can run the specs with:
``` bash
bundle exec rspec
```

And start the server with:
``` bash
bin/dev
```

The application will be available to a browser at `http://localhost:3000`.


