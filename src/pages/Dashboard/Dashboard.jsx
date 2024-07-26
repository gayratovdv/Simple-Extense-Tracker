// src/components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import ExpenseList from '../../components/DashboardComp/ExpenseList';
import ExpenseForm from '../../components/DashboardComp/ExpenseForm';
import Filter from '../../components/DashboardComp/Filter';
import Summary from '../../components/DashboardComp/Summary';
import './style.scss';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer';
import '../../components/DashboardComp/Dashboard.scss';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [filter, setFilter] = useState('all');

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
    };

    const filteredExpenses = expenses.filter(expense => {
        if (filter === 'all') return true;
        if (filter === 'above100') return expense.amount > 100;
        if (filter === 'below100') return expense.amount <= 100;
        return true;
    });

    return (
        <>
            <Navbar />
            <Container>
                <div className="dashboard-container">
                    <h1>Expense Dashboard</h1>
                    <ExpenseForm addExpense={addExpense} />
                    <Filter onFilterChange={handleFilterChange} />
                    <Summary expenses={expenses} />
                    <ExpenseList expenses={filteredExpenses} />
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Dashboard;
