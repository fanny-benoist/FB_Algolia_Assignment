## Table of contents
* [General info](#general-info)
* [Contents](#Contents)
* [Setup](#setup)

## General info
This **Exercice1 - Answers** folder contains all code files associated with the Exercise 1.

Exercices:    
Write a program in Python that takes in a json(sample-json.json), outputs and generates the following:

- Ex 1: Number of unique shape types
- Ex 2: Frequency of each shape and all labels associated with the shapes (for e.g. line - 'middle line': 445)
- Ex 3: Create two different png/jpegs that visualizes the shapes i) colors are based on shape types ii) colors are based on annotation label. Checkout 3 sets of samples, Question 1 Example Images.
The dimensions of the original image were: 3840 × 2160

## Contents
- main.py:
  - opens sample-json.json and saves the json object as a dictonary   
  - contains the function get_list_of_type_of_shape() that returns a list of type of shape    
  - contains the function get_frequency_of_shape(list_of_type_of_shape) that returns a list of shape type associated to a label and their frequency   


- Exercise1_launcher.py (to run):
  - calls the get_list_of_type_of_shape() of main.py    
  - returns the number of unique shape types        


- Exercise2_launcher.py (to run):     
  - calls the get_list_of_type_of_shape() of main.py  
  - calls the get_frequency_of_shape(list_of_type_of_shape) of main.py    
  - returns the frequency of each shape and all labels associated with the shapes (for e.g. line - 'middle line': 445)    


- Exercise3_launcher.py (to run):   
  - calls the get_list_of_type_of_shape() of main.py  
  - calls the get_frequency_of_shape(list_of_type_of_shape) of main.py
  - returns all points associated to a shape type and label
  - generates 2 images that visualize the shapes i) colors are based on shape types ii) colors are based on annotation label.


- Question 1 Exemple Images folder:   
  - contains the samples of generated images    


- image_color_based_label.png:     
  - image generated when running the Exercise3_launcher.py file   
  - visualizes the shapes where colors are based on labels    


- image_color_based_shape.png:     
    - image generated when run the Exercise3_launcher.py file
    - visualizes the shapes where colors are based on shape type

- Pipefiles:   
  - Pipfiles contain information for the dependencies of the project.


## Setup
To run this project:    
- install the git repository locally   
- install pipenv in your system if not installed yet
- Under /SF-SE-FB/Answers - FB/Exercice 1 - Answers, type:    
  - `$ pipenv install` It will locates Pipfiles, creates a new virtual env and install the necessary packages to run the program
  - `$ pipenv shell` : To launch the virtual environment and run the program that refers to packages stored on pipefiles  
  - To get answer of Exercice 1, run:  `$ python3 Exercise1_launcher.py`    
  - To get answer of Exercice 2, run:  `$ python3 Exercise2_launcher.py`     
  - To get answer of Exercice 3, run:  `$ cd python3 Exercise3_launcher.py`
