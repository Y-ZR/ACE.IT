from openai import OpenAI
import os

client = OpenAI(
    api_key="your-api-key-here",
)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
        {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
    ]
)

print(completion.choices[0].message)

'''
The  OpenAI  class is a wrapper around the OpenAI API. The  client  object is initialized with the API key, which is stored in the  OPENAI_API_KEY  environment variable.
  The  client  object is used to make API requests. In this case, we are using the  chat.completions.create  method to generate a response to the user's message.
  The response is stored in the  completion  variable. The response is a list of messages, where each message has a  role  and  content . The  content  field contains the text of the message.
  The response is printed to the console.
  Running the script will output the following response:
  You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.
'''
