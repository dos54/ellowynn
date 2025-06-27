# Database

## Homepage
### Highlights (ie news)
### Blog post

## Projects
### Books
### Series
### In the works

## Tables Needed:
### books
- `title`: string
- `author`: string
- `completed`: bool
- `series`: (optional) references a series. Maybe another schema for this? Either that or enum.
- `description`: string
- `publish date`: date (the date of publishing)
- `links`: url (link to amazon page or similar). Maybe there should be multiple links?? Alternatively it may be a good idea to have a `sale-link` to a seller specifically and then other possible links? I'm unsure.

### posts
- `type`: enum relating to PostType
- `title`: string
- `slug`: string, unique
- `content`: string. Should look into some way to allow custom formatting.
- `publishedAt`: date. Doesn't postgres keep track of this automatically? maybe this should stay seperate, for example to allow scheduled posts
- `tags`: string[]
- `eventStart` Date, specific to events
- `eventEnd` Date, specific to events
- `eventLocation` string, specific to events

It may be good to look into ways to have 'pinned' posts. Should this be a property of the posts table? or maybe there should be a seperate table that stores pinned posts.

### socials
This one may be unnecessary. The main thing is that I want her to be able to change the link in the future if necessary.
- `displayName`: string
- `link`: url
