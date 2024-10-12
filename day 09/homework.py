deposit = 1.2
balance = float(input("How much money do you want to have on your balance with deposit: "))

new_balance = balance * deposit
print(f"Your balance in 1 year will be: {new_balance}$")

new_new_balance = new_balance * deposit
print(f"Your balance in 2 years will be: {new_new_balance}$")
