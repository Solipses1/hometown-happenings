# Hometown Happenings

### Description:

Hometown Happenings is a project created because of the need for a modern event-listing site serving smaller communities in Minnesota.  In having an easily-searchable and navigable site for local events, I hope to make it easier for community members to find activities that interest them, and hopefully connect with others who share the same interests.

Hometown Happenings is built using the NextJS framework, with an sqlite database for development and the prisma ORM to interact with the database.  Tailwind is used to handle CSS styling, framermotion is ued to provide reactive modern styling, and zod is used for validation of availabe pages.

Users are initially presented with a search form to narrow event results down to specific cities, they are also able to use the sitewite navigation bar to view all events.  Links to popular cities are listed underneath the searchbar for immediate access.  

The events list page is filled with 6 cards for events listed in order of date, each displaying basic information for the events with a picture to represent them.  These event cards are reactive to scrolling via framermotion, and will change size as they come into view.  After clicking on an event, the user is presented with the event page where the date, organizer, location, and full description of the event are displayed.  

Future improvements to the Hometown Happenings app include sorting events by categories, a login feature where users can save events, an automated email sent weekly to remind users of upcoming events, and being able to save a city as a default.