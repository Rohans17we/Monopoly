# Monopoly Board Planning

This file outlines the planned layout and types of spaces for our Monopoly board. This will help us design the board and data structures in code.

## Board Layout (Rough Sketch)

```
+---------------------------------------------------------------------------------+
| [Jail/Just Visiting]   [City]   [Surprise]   [City]   [Tax]   [City]   [Vacation] |
|                                                                                 |
| [City]                                                                [City]    |
|                                                                                 |
| [Treasure]                                                            [Jackpot] |
|                                                                                 |
| [City]                                                                [City]    |
|                                                                                 |
| [Go to Jail]   [City]   [Surprise]   [City]   [Tax]   [City]   [Start/Go]       |
+---------------------------------------------------------------------------------+
```

## Space Types
- **Start/Go** (Corner)
- **Jail/Just Visiting** (Corner)
- **Vacation** (Corner)
- **Go to Jail** (Corner)
- **City/Property** (Most spaces)
- **Surprise** (Chance/Community Chest equivalent)
- **Treasure** (Bonus/Reward)
- **Jackpot** (Big reward)
- **Tax** (Income/Wealth tax)

## Example Distribution
- 4 Corners: Start/Go, Jail, Vacation, Go to Jail
- 4 Tax spaces (2 per side)
- 4 Surprise spaces
- 2 Treasure spaces
- 1 Jackpot
- Remaining: Cities/Properties (fill the rest)

---


---

## International Board


### Transport Blocks (Airports)
| Name                        | Country | Cost  |
|-----------------------------|---------|-------|
| Heathrow Airport            | UK      | $200  |
| JFK International Airport   | USA     | $200  |
| Charles de Gaulle Airport   | France  | $200  |
| Dubai International Airport | UAE     | $200  |

Owning more airports increases rent (like classic railroads).

### Utilities
- Electric Company ($150)
- Water Company ($150)

### Taxes
- Income Tax: 5% of cash on hand
- Property Tax: 10% of total property value
- Luxury Tax: $100 (fixed)

### City Sets (Countries and Cities)
*2 sets of 2 (cheapest and most expensive), 6 sets of 3 (middle)*

| Set | Country   | Cities                                 | Property Cost (per city) |
|-----|-----------|----------------------------------------|--------------------------|
| 1   | UAE       | Dubai, Abu Dhabi                       | $60, $60                 |
| 2   | Japan     | Tokyo, Osaka, Kyoto                    | $100, $100, $120         |
| 3   | China     | Beijing, Shanghai, Guangzhou           | $140, $140, $160         |
| 4   | Russia    | Moscow, St. Petersburg, Novosibirsk    | $180, $180, $200         |
| 5   | India     | Delhi, Mumbai, Bangalore               | $220, $220, $240         |
| 6   | France    | Paris, Lyon, Marseille                 | $260, $260, $280         |
| 7   | UK        | London, Manchester, Birmingham         | $300, $300, $320         |
| 8   | USA       | New York, Los Angeles                  | $350, $400               |

*Property costs are based on classic Monopoly scaling. Rents will be discussed and added later.*

---

## India Board


### Transport Blocks
| Name                      | Type     | Cost   |
|---------------------------|----------|--------|
| Indian Railways           | Railways | ₹2000  |
| Air India                 | Airways  | ₹2000  |
| Shipping Corp. of India   | Seaways  | ₹2000  |
| National Highways         | Roadways | ₹2000  |

Owning more transport blocks increases rent (like classic railroads).

### Utilities
- Electricity Board (₹1500)
- Water Supply Board (₹1500)

### Taxes
- Income Tax: 5% of cash on hand
- Property Tax: 10% of total property value
- Luxury Tax: ₹1000 (fixed)

### City Sets (States and Cities)
*2 sets of 2 (cheapest and most expensive), 6 sets of 3 (middle)*

| Set | State         | Cities                                 | Property Cost (per city) |
|-----|---------------|----------------------------------------|--------------------------|
| 1   | Assam         | Guwahati, Dibrugarh                    | ₹600, ₹600               |
| 2   | Rajasthan     | Jaipur, Jodhpur, Udaipur               | ₹1000, ₹1000, ₹1200      |
| 3   | West Bengal   | Kolkata, Siliguri, Durgapur            | ₹1400, ₹1400, ₹1600      |
| 4   | Tamil Nadu    | Chennai, Coimbatore, Madurai           | ₹1800, ₹1800, ₹2000      |
| 5   | Uttar Pradesh | Lucknow, Kanpur, Varanasi              | ₹2200, ₹2200, ₹2400      |
| 6   | Karnataka     | Bengaluru, Mysuru, Mangaluru           | ₹2600, ₹2600, ₹2800      |
| 7   | Maharashtra   | Mumbai, Pune, Nagpur                   | ₹3000, ₹3000, ₹3200      |
| 8   | Delhi         | New Delhi, South Delhi                 | ₹3500, ₹4000             |

*Property costs are based on classic Monopoly scaling. Rents will be discussed and added later.*

---

Please review these ideas and suggest changes or additions for both boards. Once finalized, we can update the city/state/country lists and continue planning.
