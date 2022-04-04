from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response 

# Create your views here.

class BudgetView(APIView): 
    def get(self, request, format=None):
        return Response({"message": "These are your budgets"}, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        return Response(data={"message": "Creating a new budget"}, status=status.HTTP_201_CREATED)