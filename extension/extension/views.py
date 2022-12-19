
from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####
import nltk
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
import spacy
from spacy import displacy
from collections import Counter
import en_core_web_sm
from pprint import pprint


def index(request):
    return HttpResponse("Hello, world. You're at the wiki index.")


# https://pypi.org/project/wikipedia/#description
def get_ner(request):
    topic = request.GET.get('topic', None)

    print('topic:', topic)

    
    nlp = en_core_web_sm.load()

    doc = nlp(topic)
    pprint([(X.text, X.label_) for X in doc.ents])
    data = {
        'summary': [(X.text, X.label_) for X in doc.ents],
        'raw': 'Successful',
    }

    print('json-data to be sent: ', data)
    response = JsonResponse(data, status=200)
    response['Access-Control-Allow-Origin'] = "*"
    return response