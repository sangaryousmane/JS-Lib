
class Circle:

    def __init__(self, radius:float):
        self.radius=radius;
    

    def display(self):
        return 'Radius: {}'.format(self.radius);
    


circle=Circle(30.9);
print(circle.display());