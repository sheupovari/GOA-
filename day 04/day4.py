user_age = int(input("What's your age?: "))
print(f"As user said, he/she is {user_age}")

user_name = input("What's your name?: ")
user_lastname = input("What's your lastname?: ")
print(f"So your name is {user_name} {user_lastname}. Your age is {user_age}.")

father_name = input("What's your father's name?: ")
father_age = int(input("What's your father's age?: "))
print("As you said, your father's name is {father_name} and his age is {father_age}.")

mom_name = input("What's your mother's name?: ")
mom_age = int(input("What's your mother's age?: "))
print("As you said, your mother's name is {mom_name} and her age is {mom_age}.")

pet_question = input("Do you have a pet?: ").lower()
if "no" in pet_question:
    print("Okay that's fine.")
elif "yes" in pet_question:
    pet_name = input("What's your pet's name?: ")
    pet_age = int(input("What's your pet's age?: "))
    print("Okay, so the pet's name is {pet_name} and its age is {pet_age}.")

user_age_in_15_years = user_age + 15
print("In 15 years you will be {user_age_in_15_years}.")

mom_age_in_15_years = mom_age + 15
print("In 15 years your mom will be {mom_age_in_15_years}.")

father_age_in_15_years = father_age + 15
print("In 15 years your dad will be {father_age_in_15_years}.")
