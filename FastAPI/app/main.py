from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define allowed origins
origins = [
    "http://localhost:3000",  # React frontend
    # Add other origins if necessary
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,             # Allow specified origins
    allow_credentials=True,
    allow_methods=["*"],               # Allow all HTTP methods
    allow_headers=["*"],               # Allow all headers
)

# tbd separate controller and business logic layers (create seaprate py file for actual calculation)
# tbd introduce model layer with pydantic
# there won't be a persistence layer as there is no db involved

@app.get("/calculator/sample-size") #routing layer
async def calc_sample_size(): #controller + business logic layers
    return {"sample-size":10000}


@app.get("/calculator/test-result")
async def calc_test_results():
    return {"p-val":0.1}