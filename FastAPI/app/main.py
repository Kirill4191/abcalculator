from fastapi import FastAPI

# tbd separate controller and business logic layers (create seaprate py file for actual calculation)
# tbd introduce model layer with pydantic
# there won't be a persistence layer as there is no db involved

app = FastAPI()

@app.get("/calculator/sample-size") #routing layer
async def calc(): #controller + business logic layers
    return {"sample-size":10000}


@app.get("/calculator/test-result")
async def calc():
    return {"p-val":0.1}