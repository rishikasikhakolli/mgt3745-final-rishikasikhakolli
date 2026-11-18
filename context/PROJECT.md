# PROJECT.md

## Problem statement

Traveling is one of people's most beloved hobbies, and travelers are constantly taking pictures to share. But today's social media feels judged with some platforms being too formal and others too serious. I take trips often and love sharing them with friends on social media and over text, but I never get to simply put my thoughts out there quickly, and I often forget details because they were never recorded.

## Reframe
- **Original framing:** Travelers need a less judgmental social media platform to share their trips.
- **Reframed:** Travelers need a quick way to record trip moments as they happen, so friends can follow along without either side feeling pressure to perform or reply.
- **Why:** The problem isn't that travelers need one more app to post on. It's that they forget trip moments because they never write them down, and posting feels like putting on a show. So I'm focusing on making posting quick and easy instead of the purpose being surrounded by likes or follows.

## Who it is for

* **Primary:** casual travelers who want a low-pressure way to share trip highlights with friends without frequent public posting. 
* **Secondary:** friends of those travelers, who want to follow the trip without being flooded with texts.
  
*Details in [USERS.md](USERS.md).*

## Success Measures
| Type | Measure | How it's counted |
|---|---|---|
| **Outcome** | Real users post reviews after their first visit | Reviews created in D1 after the share date |
| **Leading indicator** | Friends open the shared Travlr link | Number of real users who open the link within 24 hours, observed or reported in [docs/FEEDBACK.md](../docs/FEEDBACK.md) |
| **Guardrail** | No review is lost or shows the wrong photo or spot name | Checking the feed on a second device should find 0 missing or mismatched reviews |

*Thresholds and the decision they drive are in [docs/DECISION-001.md](../docs/DECISION-001.md).*

## Scope

* **In:** reviews with a photo, spot name, and text, all saved in D1 so they show on any device and category filtering (Food, Landmark, Views, Activity)
* **Out:** trip booking and in-app chat (explicit non-goals)
* **Deferred:** user accounts or login, ranking places against each other, city ranking/map, "Traveled with" tagging, and handling many users writing at the same time
  
*Full scope and acceptance criteria in [FEATURES.md](FEATURES.md).*

## Constraints

The platform is built and run in GitHub Codespaces. It has been deployed on Cloudflare (compute) and D1 (storage). Currently, anyone with the URL can read and write entries. Trust Boundary crossings now recorded in [TOOLS.md](TOOLS.md).
