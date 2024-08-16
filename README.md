# Microservice


```
Command Docker

docker compose up
docker compose down
```

## API-TOUR

```
Endpoint Tour:

POST: http://localhost/api/v1/tours
GET: http://localhost/api/v1/tours

Body Request

{
  "name": "",
    "duration": 1,
    "maxGroupSize": 1,
    "difficulty": "easy",
    "ratingsAverage": 1,
    "ratingsQuantity": 1,
    "price": 1,
    "summary": "",
    "description": "",
    "imageCover": "",
    "images": [
      ""
    ],
    "startDates": [
      "2021-08-05,10:00",
    ]
}

```

## API-SEARCH

```
Endpoint Search:

GET: http://localhost/api/v1/search
GET: http://localhost/api/v1/search/:id

```