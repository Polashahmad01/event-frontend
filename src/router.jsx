import { createBrowserRouter } from "react-router-dom"

import { RootAppLayout } from "./layout/RootAppLayout"

import { HomePage } from "./pages/Home/Index"
import { EventListingPage } from "./pages/Event/Index/Index"
import { CreateNewEventPage } from "./pages/Event/CreateEvent/Index"
import { EventDetailPage } from "./pages/Event/EventDetail/Index"
import { EditEventPage } from "./pages/Event/EditEvent/Index"
import { TagIndexPage } from "./pages/Tag/Index"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootAppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "event",
        element: <EventListingPage />
      },
      {
        path: "event/new",
        element: <CreateNewEventPage />
      },
      {
        path: "event/:eventId",
        element: <EventDetailPage />
      },
      {
        path: "event/:eventId/edit",
        element: <EditEventPage />
      },
      {
        path: "tags/new",
        element: <TagIndexPage />
      }
    ]
  }
])
