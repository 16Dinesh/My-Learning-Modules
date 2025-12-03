def my_function():
  print("Hello from a function")

my_function()
# print(my_function())

def get_greeting():
  return "Hello This is Greeting"

print(get_greeting())

#  Arg vs Para

def add(a, b = 2) : #default value  -> Parameter
    return a + b
result = add(2)  # --> Arguments 
print(result)

# Positional-Only Arguments
def fun_Pos(name, /):
  print("Hello", name)

fun_Pos("Emil")

# KEYWORD only Arg 
def fun_Keyword(*, name):
  print("Hello", name)

fun_Keyword(name = "Emil")

# Arbitrary Arguments -> *args (Positional arguments)

def fun_arb(greeting, *names):
  for name in names:
    print(greeting, name)

fun_arb("Hello", "Emil", "Tobias", "Linus")

#  --> **kwargs (if you don't how many  Keyword arg are coming use this)


# scope

# Local Scope -> refers to variables created inside a function.

def func():
    x = 10   # local variable
    print(x)

func()
# print(x)  # not defined 


# Global Scope 

y = 50  # global variable --> defined outside all functions and can be accessed anywhere

def func():
    print(y)

func()  # → 50
print(y)  # → 50

# Global Keyword 

x = 10

def func():
    global x  #--> Keyword  
    x = 20   # modifies global x
    print("Inside:", x)

func()
print("Outside:", x)  # → 20

# nonlocal keyword -->nested functions to modify a variable from the enclosing (non-global) scope.

def outer():
    x = 10

    def inner():
        nonlocal x
        x = 20   # modifies outer's x
    
    inner()
    print(x)

outer()  # → 20


# L E G B Rule  --> py look variables in following order 
#   L --> Local 
#   E --> Enclosing
#   G --> Global
#   B --> Built-in

print("-------------------------------------------------")
# decorator
def my_decorator(func):
    def wrapper():
        print("Before the function runs")
        func()
        print("After the function runs")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()

# range(start, stop, step)
# print(type(range(5)))
print(range(5))

# tuple_iterator
my_tuple = ("apple", "banana", "cherry")
my_it = iter(my_tuple)

print(type(my_it))

print(next(my_it))
print(next(my_it))
print(next(my_it))