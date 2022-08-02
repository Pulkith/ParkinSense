#include <iostream>
#include <iomanip>

using namespace std;

int main() {
// Model TP TN FP FN(BAD)
// Vocal 1400 1200  78 22
// Facial 200 375 20 5
// EBR 150 280 60 10
// Overall 997 1496 6 1
	for(int i = 0; i < 7; ++i){
		string name;
		double TP, TN, FP, FN;
		cin >> name >> TP >> TN >> FP >> FN;
			std::cout << std::fixed << std::showpoint;
			std::cout << std::setprecision(3);
			double accuracy = (TP + TN) / (TP + TN + FP + FN);
			double precision = TP / (TP + FP);
			double recall = TP / (TP + FN);
			double specifcity = TN / (TN + FP);
			double f1 = 2 * (precision * recall) / (precision + recall);
			double npv = TN / (TN + FN);

			cout << name << " & " << accuracy << " & " << precision << " & " << recall << " & " << sensitivity << " & " << specifcity << " & " << f1 << " & "<< npv  << " \\\\ "<< endl;
	}

}