
int calculate_input(){

    char s;
    int num1, num2, result;
    printf("Please enter *, +, / and - to perform arithmetic\n");
    scanf("%c", &s);

    printf("Enter first number:\n");
    scanf("%d", &num1);

    printf("Enter second number:\n");
    scanf("%d", &num2);

    switch(s){
        case '+':
            result = num1 + num2;
            printf("%d + %d = %d", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%d - %d = %d", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%d * %d = %d", num1, num2, result);
            break;
        case '/':
            if (num2 > 0) {
                result = num1 / num2;
                printf("%d / %d = %d", num1, num2, result);
                break;
            }
        default:
            printf("Your input is invalid, please enter valid number");
    }
}

int main(void){

    calculate_input();
    return 0;
}