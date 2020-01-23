from gtts import gTTS
import os
from playsound import playsound

#slope or y data goes here
data = "[.1, .8, .9, .5, .06]"

language = 'en'

speech = gTTS(text = data, lang = language, slow=True)

speech.save("text.mp3")
playsound("text.mp3")
