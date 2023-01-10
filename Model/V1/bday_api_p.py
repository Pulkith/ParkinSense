import pickle

from fastapi import FastAPI

import uvicorn

from pydantic import BaseModel

import nest_asyncio
nest_asyncio.apply()

class Music(BaseModel):

    time: int

app = FastAPI()




with open("./bday_model.pkl", "rb") as f:

    model = pickle.load(f)

@app.get('/')

def index():

    return {'message': 'This is the homepage of the API '}

@app.post('/prediction')

def get_pred(data: Music):

    received = data.dict()

    time = received['time']
    
    pred_name = model.predict([[time]]).tolist()[0]

    return {'prediction': pred_name}

if __name__ == '__main__':

    uvicorn.run(app, host='127.0.0.1', port=4000)