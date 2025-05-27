import React, { useState } from 'react'; // Added useState

// Your Itinerary JSON data (same as before)
const itineraryData = {
  "tripName": "Grand Teton & Yellowstone Family Adventure",
  "travelDates": "May 28, 2025 - June 2, 2025",
  "importantNotes": [
    {
      "topic": "Altitude",
      "details": "Both Grand Teton and Yellowstone are at a high elevation (Yellowstone generally 6,000-8,000 feet). Ensure everyone, especially your toddler, stays well-hydrated. Take it easy the first day or two."
    },
    {
      "topic": "Weather",
      "details": "Late May/early June can bring a mix of weather – sunshine, rain, and even late-season snow, especially at higher elevations. Pack layers of clothing for everyone, including warm hats, gloves, waterproof jackets, and sun protection (sunscreen, sunglasses, sun hats)."
    },
    {
      "topic": "Wildlife Safety",
      "details": "Always keep a safe distance from wildlife (at least 100 yards from bears and wolves, 25 yards from other animals like bison and elk). Never feed wildlife. Store food securely. Carry bear spray if you plan on doing any hiking, and know how to use it."
    },
    {
      "topic": "Toddler Gear",
      "details": "A comfortable child carrier (backpack style) will be invaluable for trails that aren't stroller-friendly. A stroller can be useful for paved paths and around visitor centers/lodges."
    },
    {
      "topic": "Services",
      "details": "Cell service can be spotty to non-existent in many park areas. Download offline maps (Google Maps, park apps) before you go."
    },
    {
      "topic": "Road Conditions",
      "details": "Most main park roads should be open by your travel dates. However, temporary closures due to weather can happen. The Dunraven Pass (between Canyon and Tower in Yellowstone) typically aims to open by the Friday of Memorial Day weekend; check its status upon arrival."
    },
    {
      "topic": "Flexibility",
      "details": "This is a template! Be prepared to change plans based on your toddler's mood, weather, or unexpected wildlife sightings."
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "date": "Wednesday, May 28",
      "title": "Arrival in Jackson Hole & Grand Teton Charm",
      "schedule": [
        {
          "time_period": "Morning/Afternoon (Arrival at 12:00 PM)",
          "activities": [
            "Arrive at Jackson Hole Airport (JAC).",
            "Pick up your rental car.",
            "Drive to your lodging in or near Grand Teton National Park (approx. 30-45 mins from JAC depending on location).",
            "Settle in. This is a good time for your toddler's nap if they didn't sleep on the plane/drive."
          ],
          "points_of_interest": [
            {
              "name": "Jackson Hole Airport (JAC)",
              "Maps_url": "https://maps.google.com/?q=Jackson+Hole+Airport"
            }
          ]
        },
        {
          "time_period": "Late Afternoon (Post-Nap)",
          "title": "Easy Exploration: Gentle introduction to the Tetons.",
          "points_of_interest": [
            {
              "name": "Schwabacher Landing",
              "description": "Drive to this easily accessible spot along the Snake River. It offers iconic Teton views, calm waters, and a chance for your toddler to stretch their legs. The reflections can be stunning.",
              "image_url": "http://googleusercontent.com/image_collection/image_retrieval/9427608497669654168",
              "Maps_url": "https://maps.google.com/?q=Schwabacher+Landing"
            },
            {
              "name": "Craig Thomas Discovery & Visitor Center",
              "description": "Stop by the Craig Thomas Discovery & Visitor Center (check hours, typically open until 5 PM) for maps, current conditions, and any Junior Ranger info if you think your toddler might enjoy the badge later.",
              "Maps_url": "https://maps.google.com/?q=Craig+Thomas+Discovery+%26+Visitor+Center"
            }
          ]
        },
        {
          "time_period": "Evening",
          "activities": [
            "Dinner at your lodging or a family-friendly restaurant in Jackson or Teton Village (if staying nearby).",
            "Early bedtime to adjust to any time difference and altitude."
          ]
        }
      ]
    },
    {
      "day": 2,
      "date": "Thursday, May 29",
      "title": "Grand Teton Majesty & Journey to Yellowstone",
      "schedule": [
        {
          "time_period": "Morning (9:00 AM - 12:00 PM)",
          "points_of_interest": [
            {
              "name": "Jenny Lake",
              "options": [ // Note: These are options within a POI, not day-level options for tabs
                {
                  "type": "Boat & Short Hike to Hidden Falls",
                  "description": "Take the scenic boat shuttle across Jenny Lake (from South Jenny Lake Boat Dock). From the west dock, it's a relatively short, slightly uphill walk to see Hidden Falls (approx. 0.5 miles one way). You can continue a bit further to Inspiration Point if energy levels allow, but Hidden Falls is a good turnaround with a toddler.",
                  "image_url": "http://googleusercontent.com/image_collection/image_retrieval/5718309293210740944",
                  "Maps_url_dock": "https://maps.google.com/?q=Jenny+Lake+Boating+Concession",
                  "Maps_url_hidden_falls_trailhead": "https://maps.google.com/?q=Hidden+Falls+Trailhead,+Grand+Teton+National+Park"
                },
                {
                  "type": "Lakeshore Stroll",
                  "description": "If the boat seems like too much, enjoy a walk along the paved Jenny Lake Trail near the visitor center – it's stroller-friendly and offers beautiful views.",
                  "Maps_url_trailhead": "https://maps.google.com/?q=Jenny+Lake+Trailhead"
                }
              ]
            },
            {
              "name": "String Lake",
              "description": "After Jenny Lake, head to nearby String Lake. It's shallow, often a bit warmer, and perfect for a toddler to wade (with supervision!) or play by the shore. Great spot for a pre-lunch snack.",
              "image_url": "http://googleusercontent.com/image_collection/image_retrieval/1069003603678141637",
              "Maps_url": "https://maps.google.com/?q=String+Lake,+Grand+Teton+National+Park"
            }
          ]
        },
        {
          "time_period": "Lunch & Nap (12:00 PM - 2:30 PM)",
          "activities": [
            "Have a picnic lunch at String Lake or head back to your Grand Teton lodging.",
            "Toddler's nap time. This could be at the lodge or you can start your drive towards Yellowstone, letting your toddler nap in the car."
          ]
        },
        {
          "time_period": "Afternoon (2:30 PM onwards)",
          "title": "Drive to Canyon Lodge, Yellowstone",
          "activities": [
            "The drive from Grand Teton (e.g., Moose area) to Canyon Lodge in Yellowstone is scenic but takes roughly 2.5 - 3 hours (approx. 100 miles) without major stops. You'll enter Yellowstone via the South Entrance."
          ],
          "points_of_interest": [
             {
                "name": "Lewis Falls, Yellowstone",
                "description": "Near the South Entrance of Yellowstone, a quick, accessible roadside stop.",
                "Maps_url": "https://maps.google.com/?q=Lewis+Falls,+Yellowstone+National+Park"
             },
             {
                "name": "Canyon Lodge & Cabins",
                "description": "Your lodging in Yellowstone.",
                "Maps_url": "https://maps.google.com/?q=Canyon+Lodge+%26+Cabins,+Yellowstone"
             }
          ]
        },
        {
          "time_period": "Evening",
          "activities": [
            "Arrive at Canyon Lodge, check in, and settle.",
            "Dinner at Canyon Lodge (make dining reservations if possible, or be prepared for casual options).",
            "Short walk around the Canyon Village area if your toddler is up for it, but prioritize rest."
          ]
        }
      ]
    },
    {
      "day": 3,
      "date": "Friday, May 30",
      "title": "The Grand Canyon of Yellowstone & Gentle Geysers",
      "schedule": [
        {
          "time_period": "Morning (9:30 AM - 12:00 PM)",
          "title": "Grand Canyon of the Yellowstone",
          "points_of_interest": [
            {
              "name": "North Rim Drive Overlooks",
              "description": "Explore overlooks like Lookout Point, Grand View, and Inspiration Point. Many have short, paved paths suitable for strollers. Views of Upper and Lower Falls are spectacular.",
              "image_url": "http://googleusercontent.com/image_collection/image_retrieval/15253047936268610135",
              "Maps_url_lookout_point": "https://maps.google.com/?q=Lookout+Point,+Grand+Canyon+of+Yellowstone",
              "Maps_url_grand_view": "https://maps.google.com/?q=Grand+View,+Grand+Canyon+of+Yellowstone",
              "Maps_url_inspiration_point": "https://maps.google.com/?q=Inspiration+Point,+Grand+Canyon+of+Yellowstone"
            },
            {
              "name": "Brink of the Lower Falls trail (optional)",
              "description": "Consider a short walk if you use a child carrier (steep with stairs, assess suitability).",
              "Maps_url_trailhead": "https://maps.google.com/?q=Brink+of+the+Lower+Falls+Trailhead,+Yellowstone"
            }
          ]
        },
        {
          "time_period": "Lunch & Nap (12:00 PM - 3:00 PM)",
          "activities": [
            "Lunch at Canyon Lodge or a picnic.",
            "Return to Canyon Lodge for your toddler's nap."
          ]
        },
        {
          "time_period": "Afternoon (3:00 PM - 5:30 PM)",
          "points_of_interest": [
            {
              "name": "Hayden Valley Wildlife Watching",
              "description": "Drive south from Canyon into Hayden Valley. Prime area for bison, elk, possibly coyotes or bears. Stay in/near your car. Pull over at designated pullouts.",
              "image_url": "http://googleusercontent.com/image_collection/image_retrieval/6130094411118831993",
              "Maps_url_valley_viewpoint": "https://maps.google.com/?q=Hayden+Valley,+Yellowstone"
            },
            {
              "name": "Mud Volcano Area",
              "description": "Short stop for bubbling mud pots and steaming features. Boardwalks are generally manageable.",
              "Maps_url": "https://maps.google.com/?q=Mud+Volcano+Area,+Yellowstone"
            }
          ]
        },
        {
          "time_period": "Evening",
          "activities": [
            "Dinner at Canyon Lodge.",
            "Attend a Ranger Program if there's a family-friendly one offered."
          ]
        }
      ]
    },
    {
      "day": 4,
      "date": "Saturday, May 31",
      "title": "Geyser Basins or Northward Exploration",
      "options": [ // These are the day-level options to be tabbed
        {
          "option_title": "Geyser Wonderland (More Driving)",
          "schedule": [
            {
              "time_period": "Morning (9:00 AM - 12:30 PM)",
              "activities": [
                "Drive to Old Faithful Area (Approx. 1-hour drive from Canyon)."
              ],
              "points_of_interest": [
                {
                  "name": "Old Faithful Geyser",
                  "description": "Witness an eruption (check predicted times).",
                  "image_url": "http://googleusercontent.com/image_collection/image_retrieval/9901161804785621865",
                  "Maps_url": "https://maps.google.com/?q=Old+Faithful+Geyser"
                },
                {
                  "name": "Upper Geyser Basin boardwalks",
                  "description": "Explore (stroller-friendly parts) to see other geysers and hot springs like Morning Glory Pool. Start near Old Faithful Visitor Center.",
                  "Maps_url_visitor_center": "https://maps.google.com/?q=Old+Faithful+Visitor+Education+Center"
                }
              ]
            },
            {
              "time_period": "Lunch & Nap (12:30 PM - 3:30 PM)",
              "activities": [
                "Picnic lunch or eat at Old Faithful area facilities.",
                "Start drive back towards Canyon Lodge (nap in car), or return to Canyon Lodge for nap."
              ]
            },
            {
              "time_period": "Afternoon (3:30 PM - 5:30 PM)",
              "points_of_interest": [
                {
                  "name": "Midway Geyser Basin",
                  "description": "See Grand Prismatic Spring from boardwalk. New Overlook Trail offers better view (more hike).",
                  "image_url": "http://googleusercontent.com/image_collection/image_retrieval/10988196856159330305",
                  "Maps_url_boardwalk": "https://maps.google.com/?q=Midway+Geyser+Basin,+Yellowstone",
                  "Maps_url_overlook_trailhead": "https://maps.google.com/?q=Grand+Prismatic+Spring+Overlook+Trailhead"
                },
                {
                  "name": "Lower Geyser Basin/Fountain Paint Pot Trail",
                  "description": "Interesting geothermal features on an easy boardwalk trail.",
                  "Maps_url_trailhead": "https://maps.google.com/?q=Fountain+Paint+Pot+Trailhead"
                }
              ]
            }
          ]
        },
        {
          "option_title": "North Towards Mammoth/Lamar (Less Backtracking if Dunraven is Open)",
          "schedule": [
            {
              "time_period": "Morning (9:30 AM - 12:30 PM)",
              "activities": [
                "Drive North from Canyon (if Dunraven Pass is open)."
              ],
              "points_of_interest": [
                {
                  "name": "Tower Fall",
                  "description": "Quick stop (trail to the bottom is likely too steep).",
                  "Maps_url": "https://maps.google.com/?q=Tower+Fall,+Yellowstone"
                },
                {
                  "name": "Lamar Valley (Wildlife Viewing)",
                  "description": "Continue for more wildlife viewing (longer morning). A common pullout is the Lamar River Stock Trailhead.",
                  "Maps_url_pullout": "https://maps.google.com/?q=Lamar+River+Trailhead,+Yellowstone"
                },
                {
                  "name": "Norris Geyser Basin (alternative if Dunraven closed)",
                  "description": "Some boardwalks, can be long.",
                  "Maps_url": "https://maps.google.com/?q=Norris+Geyser+Basin,+Yellowstone"
                }
              ]
            },
            {
              "time_period": "Lunch & Nap (12:30 PM - 3:30 PM)",
              "activities": [
                "Picnic lunch or eat at facilities near Tower or Mammoth.",
                "Nap in car on return drive to Canyon Lodge or back at lodge."
              ]
            },
            {
              "time_period": "Afternoon (3:30 PM - 5:30 PM)",
              "activities": [
                "Canyon Area revisited: Explore missed overlooks or enjoy a quieter walk."
              ],
              "points_of_interest": [
                {
                    "name": "Canyon Visitor Education Center",
                    "description": "Spend some time here; they often have good exhibits.",
                    "Maps_url": "https://maps.google.com/?q=Canyon+Visitor+Education+Center,+Yellowstone"
                }
              ]
            }
          ]
        }
      ],
      "evening_activities": [
        "Dinner at Canyon Lodge."
      ]
    },
    {
      "day": 5,
      "date": "Sunday, June 1",
      "title": "Yellowstone Lake & Relaxed Pace",
      "schedule": [
        {
          "time_period": "Morning (9:30 AM - 12:00 PM)",
          "title": "Yellowstone Lake & West Thumb Geyser Basin",
          "activities": [
            "Drive south from Canyon towards Yellowstone Lake (approx. 30-40 mins to Lake Village/West Thumb)."
          ],
          "points_of_interest": [
            {
              "name": "West Thumb Geyser Basin",
              "description": "Unique spot where geothermal features meet the lake. Boardwalk trail is short, flat, scenic.",
              "image_url": "http://googleusercontent.com/image_collection/image_retrieval/11324262038917679853",
              "Maps_url": "https://maps.google.com/?q=West+Thumb+Geyser+Basin,+Yellowstone"
            },
            {
              "name": "Yellowstone Lake - Lake Village",
              "description": "Enjoy views of Yellowstone Lake. Perhaps a short walk along the shore if accessible.",
              "image_url": "http://googleusercontent.com/image_collection/image_retrieval/15434339719685494387",
              "Maps_url": "https://maps.google.com/?q=Lake+Village,+Yellowstone+National+Park"
            }
          ]
        },
        {
          "time_period": "Lunch & Nap (12:00 PM - 3:00 PM)",
          "activities": [
            "Lunch at Lake Lodge/Hotel, Grant Village, or a picnic by the lake.",
            "Return to Canyon Lodge for toddler's nap."
          ]
        },
        {
          "time_period": "Afternoon (3:00 PM - 5:00 PM)",
          "title": "Relaxed Local Exploration",
          "activities": [
            "Revisit a favorite spot near Canyon Lodge.",
            "A very short, easy nature trail if your toddler is up for it.",
            "Start packing and organizing for your departure."
          ]
        },
        {
          "time_period": "Evening",
          "activities": [
            "Final Yellowstone dinner at Canyon Lodge."
          ]
        }
      ]
    },
    {
      "day": 6,
      "date": "Monday, June 2",
      "title": "Farewell Drive & Departure",
      "schedule": [
        {
          "time_period": "Morning (Very Early Start)",
          "activities": [
            "Breakfast at Canyon Lodge or have grab-and-go items.",
            "Depart Canyon Lodge by 8:00 AM AT THE LATEST. Drive to Jackson Hole Airport (JAC) is approx. 2.5 - 3 hours.",
            "Scenic Drive Out: Enjoy views through Yellowstone's South Entrance and Grand Teton National Park.",
            "Toddler might nap during this drive."
          ],
          "points_of_interest": [
             {
                "name": "Canyon Lodge & Cabins",
                "Maps_url": "https://maps.google.com/?q=Canyon+Lodge+%26+Cabins,+Yellowstone"
             },
             {
                "name": "Jackson Hole Airport (JAC)",
                "Maps_url": "https://maps.google.com/?q=Jackson+Hole+Airport"
             }
          ]
        },
        {
          "time_period": "Late Morning (by 11:00 AM)",
          "activities": [
            "Arrive at Jackson Hole Airport.",
            "Return rental car.",
            "Check-in for your flight and go through security."
          ]
        },
        {
          "time_period": "1:04 PM",
          "activities": [
            "Depart from Jackson Hole."
          ]
        }
      ]
    }
  ],
  "foodNotes": [
    "Pack plenty of familiar snacks and drinks.",
    "Restaurant options in the parks can be busy, and menus might be limited for picky eaters. Consider bringing some easy meal components if your toddler is selective.",
    "Picnics are a great way to enjoy the scenery and offer flexibility. Most general stores in the park sell some groceries, but the selection and price will be better if you stock up in Jackson."
  ]
};


// --- Sub-components (PointOfInterest, ScheduleItem, ImportantNotes, FoodNotes remain largely the same) ---

const PointOfInterest = ({ poi }) => {
  if (!poi) {
    console.warn("PointOfInterest received null or undefined 'poi' prop. Skipping render.");
    return null;
  }
  const getMapLinkText = (key) => {
    if (key === 'Maps_url') return 'View on Google Maps (Main Location)';
    return `View on Google Maps (${key.replace('Maps_url_', '').replace(/_/g, ' ')})`;
  };
  return (
    <div style={{ marginTop: '10px', paddingLeft: '20px', borderLeft: '2px solid #e0e0e0' }}>
      <h4>{poi.name || 'Unnamed Point of Interest'}</h4>
      {poi.description && <p style={{ fontSize: '0.9em', color: '#555' }}>{poi.description}</p>}
      {poi.image_url && (
        <img
          src={poi.image_url}
          alt={poi.name || 'Point of Interest Image'}
          style={{ maxWidth: '250px', maxHeight: '180px', borderRadius: '4px', marginBottom: '5px', display: 'block' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      )}
      {typeof poi === 'object' && Object.keys(poi)
        .filter(key => key.startsWith('Maps_url'))
        .map(key => (
          poi[key] && (
            <div key={key} style={{ fontSize: '0.9em', marginBottom: '3px' }}>
              <a href={poi[key]} target="_blank" rel="noopener noreferrer" style={{ color: '#1a73e8', wordBreak: 'break-all' }}>
                {getMapLinkText(key)}
              </a>
            </div>
          )
      ))}
      {/* Note: Options within a POI are not rendered by this component. Could be added if needed. */}
      {poi.options && Array.isArray(poi.options) && (
        <div style={{ marginLeft: '10px', marginTop: '5px', fontSize: '0.85em' }}>
          <strong style={{display: 'block', marginBottom: '3px'}}>Sub-options:</strong>
          {poi.options.map((subOpt, idx) => (
            subOpt && // Guard against null/undefined subOpt
            <div key={idx} style={{padding: '3px', borderLeft: '2px solid #ccc', marginLeft: '5px'}}>
              <p style={{margin: '2px 0'}}><strong>{subOpt.type || `Option ${idx+1}`}</strong>: {subOpt.description || 'No details'}</p>
                {typeof subOpt === 'object' && Object.keys(subOpt)
                .filter(key => key.startsWith('Maps_url'))
                .map(key => (
                  subOpt[key] && (
                    <div key={key} style={{ fontSize: '0.9em', marginBottom: '3px', marginLeft: '10px' }}>
                      <a href={subOpt[key]} target="_blank" rel="noopener noreferrer" style={{ color: '#1a73e8', wordBreak: 'break-all' }}>
                        {getMapLinkText(key)}
                      </a>
                    </div>
                  )
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ScheduleItem = ({ item }) => {
  if (!item) {
    console.warn("ScheduleItem received null or undefined 'item' prop. Skipping render.");
    return null;
  }
  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff' }}>
      <h5 style={{ marginTop: '0', marginBottom: '10px', color: '#333', fontSize: '1.1em' }}>
        {item.time_period || 'Unspecified Time'} {item.title && `- ${item.title}`}
      </h5>
      {item.activities && Array.isArray(item.activities) && (
        <ul style={{ paddingLeft: '20px', marginBottom: (item.points_of_interest || item.options) ? '10px' : '0' }}>
          {item.activities.map((activity, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>{activity || 'No activity description'}</li>
          ))}
        </ul>
      )}
      {item.points_of_interest && Array.isArray(item.points_of_interest) && item.points_of_interest.map((poi, index) => (
        <PointOfInterest key={index} poi={poi} />
      ))}
      {/* Note: ScheduleItem-level options (different from Day-level options for tabs) are not in current JSON but supported */}
      {item.options && Array.isArray(item.options) && item.options.map((option, optIndex) => {
        if (!option) {
          console.warn("ScheduleItem encountered a null or undefined 'option'. Skipping render for this option.");
          return null;
        }
        return (
          <div key={optIndex} style={{ marginTop: '15px', padding: '15px', borderLeft: '4px solid #4285F4', backgroundColor: '#f4f8ff' }}>
            <h5 style={{ marginTop: '0', color: '#4285F4' }}>Nested Option: {option.option_title || 'Unnamed Option'}</h5>
            {option.schedule && Array.isArray(option.schedule) && option.schedule.map((subItem, subIndex) => (
              <ScheduleItem key={subIndex} item={subItem} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

// --- MODIFIED Day Component with Collapsible sections and Tabs ---
const Day = ({ dayData }) => {
  // Hooks are called unconditionally at the top
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to collapsed

  // Conditional rendering logic after hooks
  if (!dayData) {
    console.warn("Day component received null or undefined 'dayData' prop. Skipping render.");
    return null;
  }

  const hasOptions = dayData.options && Array.isArray(dayData.options) && dayData.options.length > 0;

  // Tab styles
  const tabButtonStyle = (isActive) => ({
    padding: '8px 12px', // Slightly smaller tabs
    marginRight: '5px',
    marginBottom: '-1px',
    border: '1px solid #ccc',
    borderBottom: isActive ? '1px solid #fff' : '1px solid #ccc',
    backgroundColor: isActive ? '#fff' : '#f0f0f0',
    cursor: 'pointer',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    fontWeight: isActive ? 'bold' : 'normal',
    fontSize: '0.9em',
  });

  const tabContentStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    borderTop: 'none', // Remove top border as it's handled by tab buttons container
    borderTopRightRadius: '0px', // Adjusted for continuous border
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    backgroundColor: '#fff',
  };

  const dayHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#e9ecef', // Light background for header
    borderBottom: '2px solid #76c7c0',
    cursor: 'pointer', // Make header clickable
    borderRadius: '4px 4px 0 0', // Rounded top corners
  };

  const dayTitleStyle = {
    margin: '0',
    color: '#2c3e50',
    fontSize: '1.5em', // Adjusted size
  };

  const toggleButtonStyle = {
    padding: '5px 10px',
    fontSize: '0.9em',
    cursor: 'pointer',
    border: '1px solid #76c7c0',
    backgroundColor: '#fff',
    color: '#76c7c0',
    borderRadius: '4px',
  };


  return (
    <section style={{
      border: '1px solid #b0b0b0',
      borderRadius: '8px',
      marginBottom: '25px',
      backgroundColor: '#f9f9f9', // Overall background for the day section
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={dayHeaderStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
        <h3 style={dayTitleStyle}>
          Day {dayData.day || 'N/A'}: {dayData.date || 'No Date'} - {dayData.title || 'Untitled Day'}
        </h3>
        <button style={toggleButtonStyle}>
          {isCollapsed ? 'Show Details' : 'Hide Details'}
        </button>
      </div>

      {!isCollapsed && (
        <div style={{ padding: '20px', borderTop: '1px solid #ddd' }}> {/* Content area */}
          {/* Render general schedule items if they exist */}
          {dayData.schedule && Array.isArray(dayData.schedule) && dayData.schedule.map((item, index) => (
            <ScheduleItem key={`schedule-${index}`} item={item} />
          ))}

          {/* Render options in tabs if they exist */}
          {hasOptions && (
            <div style={{ marginTop: '20px' }}>
              <div style={{ marginBottom: '0px', borderBottom: '1px solid #ccc', display: 'flex', flexWrap: 'wrap' }}> {/* Tab buttons container */}
                {dayData.options.map((option, index) => (
                  option ? ( // Guard against null/undefined option object
                    <button
                      key={`option-tab-${index}`}
                      style={tabButtonStyle(activeOptionIndex === index)}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent day collapse when clicking tab
                        setActiveOptionIndex(index);
                      }}
                    >
                      {option.option_title || `Option ${index + 1}`}
                    </button>
                  ) : null
                ))}
              </div>
              {/* Active Tab Content */}
              {dayData.options[activeOptionIndex] && dayData.options[activeOptionIndex].schedule && Array.isArray(dayData.options[activeOptionIndex].schedule) ? (
                <div style={tabContentStyle}>
                  {dayData.options[activeOptionIndex].schedule.map((item, index) => (
                    <ScheduleItem key={`option-${activeOptionIndex}-item-${index}`} item={item} />
                  ))}
                </div>
              ) : (
                dayData.options[activeOptionIndex] ?
                <div style={tabContentStyle}><p>No schedule items for this option.</p></div> :
                <div style={tabContentStyle}><p>Selected option data is not available.</p></div>
              )}
            </div>
          )}

          {/* Render evening activities if they exist */}
          {dayData.evening_activities && Array.isArray(dayData.evening_activities) && (
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px dashed #ccc' }}>
              <h5 style={{ color: '#333', fontSize: '1.1em' }}>Evening</h5>
              <ul style={{ paddingLeft: '20px' }}>
                {dayData.evening_activities.map((activity, index) => (
                  <li key={`evening-${index}`} style={{ marginBottom: '5px' }}>{activity || 'No activity description'}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
};


const ImportantNotes = ({ notes }) => {
  if (!notes || !Array.isArray(notes) || notes.length === 0) return null;
  return (
  <aside style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#fff8e1', borderLeft: '5px solid #ffc107', borderRadius: '4px' }}>
    <h2 style={{ marginTop: '0', color: '#c77700', fontSize: '1.4em' }}>Important Notes Before You Go</h2>
    {notes.map((note, index) => {
      if (!note) return null;
      return ( <div key={index} style={{ marginBottom: '12px' }}> <strong style={{ color: '#594c00' }}>{note.topic || 'Note'}:</strong> {note.details || ''} </div> );
    })}
  </aside>
  );
};

const FoodNotes = ({ notes }) => {
  if (!notes || !Array.isArray(notes) || notes.length === 0) return null;
  return (
  <aside style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f5e9', borderLeft: '5px solid #4caf50', borderRadius: '4px' }}>
    <h2 style={{ marginTop: '0', color: '#2e7d32', fontSize: '1.4em' }}>Food Notes</h2>
    <ul style={{ paddingLeft: '20px' }}>
      {notes.map((note, index) => ( note ? <li key={index} style={{ marginBottom: '8px' }}>{note}</li> : null ))}
    </ul>
  </aside>
  );
};

const ItineraryPage = ({ data }) => {
  if (!data) { return <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2em' }}>Loading itinerary data...</div>; }
  const { tripName, travelDates, importantNotes, itinerary, foodNotes } = data;
  return (
    <main style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: '1.6', color: '#37474f', padding: '20px', maxWidth: '1000px', margin: '20px auto', backgroundColor: '#f4f6f8' }}>
      <header style={{ textAlign: 'center', marginBottom: '35px', paddingBottom: '15px', borderBottom: '3px solid #76c7c0' }}>
        <h1 style={{ color: '#1a237e', fontSize: '2.5em', margin: '0 0 5px 0' }}>{tripName || 'My Trip'}</h1>
        <p style={{ fontSize: '1.3em', color: '#455a64', margin: '0' }}>{travelDates || 'Dates TBD'}</p>
      </header>
      <ImportantNotes notes={importantNotes} />
      <h2 style={{ fontSize: '1.8em', color: '#1a237e', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ced4da' }}> Daily Itinerary </h2>
      {itinerary && Array.isArray(itinerary) && itinerary.map((dayData, index) => (
        <Day key={dayData ? dayData.day || index : index} dayData={dayData} />
      ))}
      <FoodNotes notes={foodNotes} />
      <footer style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ced4da', fontSize: '0.95em', color: '#546e7a' }}>
        <p>Have a wonderful and safe adventure!</p>
      </footer>
    </main>
  );
};

function App() {
  return ( <div className="App"> <ItineraryPage data={itineraryData} /> </div> );
}

export default App;
